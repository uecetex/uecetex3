var converter = new showdown.Converter({
    extensions: ['showdown-uecetexjs-figure']
});

converter.setOption('tables', 'true');

function check(el){

    if (el[0].offsetHeight < el[0].scrollHeight || el[0].offsetWidth < el[0].scrollWidth) {
        return true;
    } else {
        return false;
    }
}

function checkOverflow(el)
{

   var curOverflow = el[0].style.overflow;

   if ( !curOverflow || curOverflow === "visible" )
      el[0].style.overflow = "hidden";

   var isOverflowing = el[0].clientWidth < el[0].scrollWidth
      || el[0].clientHeight < el[0].scrollHeight;

   el[0].style.overflow = curOverflow;

   return isOverflowing;
}

function printDiv(divName) {

    console.log(checkOverflow(document.getElementById("teset")));

    return;
    var divToPrint=document.getElementById('output');

    var newWin = window.open('','Print-Window');

    newWin.document.open();

    var content = "";

    content += "<!DOCTYPE html>";
    content += "<html lang='en'>";
    content += "<head>";
    content += "<meta charset='utf-8'>";
    content += "<meta http-equiv='X-UA-Compatible' content='IE=edge'>";
    content += "<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1' />";
    content += '<link rel="stylesheet" href="css/bootstrap.min.css">';
    content += '<link rel="stylesheet" href="css/uecetex3.css">';
    content += '<link rel="stylesheet" href="css/print.css">';
    content += "</head>";
    content += "<body onload='window.print()'>";
    content += "<div id='output'>";
    content += divToPrint.innerHTML;
    content += "</div>";
    content += "<script src='js/vendor/jquery-3.1.1.min.js'></script>";
    content += "<script src='js/script.js'></script>";
    content += "</body></html>";

    newWin.document.write(content);

    newWin.document.close();
}

function view(){

    console.log("Viewing");

    var content = $("#input").val();

    var lines = content.split("\n");

    var pages = [];

    var html = "";

    $.each(lines, function(index, line){
        line = line.trim();

        if(line.startsWith("\\")){
            html += processGenerator(line);
        }else{
            html += "<p>"+line+"</p>";
        }
    });

    var html = converter.makeHtml(content);
    var nodes = $.parseHTML(html);

    var headers = [];

    var elements = [];

    $.each(nodes, function(index, node){

        if($(node).is("h1")){
            headers.push({elements: elements});
            elements = [];
        }

        elements.push(node);
    });

    headers.push({elements: elements});
    headers.shift();


    var pages = [];



    $.each(headers, function(index, header){

        var tmp;

        $.each(header.elements, function(index, node){

            if(!tmp){
                tmp = $('<page></page>');
                //tmp.css('overflowY', 'auto');
                tmp.width("210mm");
                tmp.height("297mm");
                tmp.css("padding-top", "3cm");
                tmp.css("padding-bottom", "2cm");
                tmp.css("display","block");
                tmp.css("margin","0 auto");
            }

            tmp.append(node);

            $("#output").html(tmp);

            if(check(tmp)){
                tmp.last().remove();
                pages.push(tmp);
                tmp = null;
            }
        });

        if(tmp != null){
            pages.push(tmp);
        }


    });



    var a = $('<div></div>');

    $.each(pages, function(index, page){
        a.append(page) ;
    });


    $("#output").html(a);
}

function loadExample(id){
    $.get("examples/example-"+id+".md", function(content){
        $("#input").val(content);
        view();
    });
}

$(function(){

    $("#inputs").keypress(function(){
        print();
    });

    loadExample(1);

    $("#print").click(function(){
        view();
    });

    $(".examples").click(function(){
        loadExample($(this).data("id"));
        return false;
    })
})

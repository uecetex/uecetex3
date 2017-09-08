var converter = new showdown.Converter({
    extensions: ['showdown-uecetexjs-figure']
});

converter.setOption('tables', 'true');

function check(el){

    console.log(el[0].offsetHeight);
    console.log(el[0].scrollHeight);
    console.log(el[0].offsetHeight < el[0].scrollHeight)

    if (el[0].offsetHeight < el[0].scrollHeight) {
        return true;
    } else {
        return false;
    }
}

function checkOverflow(el)
{
   var curOverflow = el.style.overflow;

   if ( !curOverflow || curOverflow === "visible" )
      el.style.overflow = "hidden";

   var isOverflowing = el.clientWidth < el.scrollWidth
      || el.clientHeight < el.scrollHeight;

   el.style.overflow = curOverflow;

   return isOverflowing;
}

function printDiv(divName) {

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
    content += '<script type="text/javascript" charset="UTF-8" src="js/vendor/jquery-3.1.1.min.js"></script>';
    content += '<script type="text/javascript" charset="UTF-8" src="js/vendor/bootstrap.min.js"></script>';
    content += '<script type="text/javascript" charset="UTF-8" src="js/vendor/showdown.min.js"></script>';
    content += '<script type="text/javascript" charset="UTF-8" src="js/showdown-extensions/showdown-uecetexjs-figure.js"></script>';
//    content += '<script type="text/javascript" charset="UTF-8" src="js/script.js"></script>';
    content += "</body></html>";

    newWin.document.write(content);

    newWin.document.close();
}

function overflow($content, maxHeight){

    var top = $content.offset().top;
    var height = $content.height();

    if (top + height > maxHeight) {
        return true;
    }

    return false;
}


function view(){

    console.log("Viewing");

    var content = $("#input").val();

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

        var content = $('<div class="content"></div>');

        var position = 0;

        $.each(header.elements, function(index, node){

            if(!node.tagName) return;

            if(!content) content = $('<div class="content"></div>');

            content.append(node);

            $("#output").html($('<div class="page"></div>').append(content));

            if(overflow($(content), $(".page").height())){

                content.children().last().remove();

                if(node.tagName == 'P'){
                    console.log(node);
                    console.log("quebrou")
                }

                pages.push($('<div class="page"></div>').append(content));
                content = null
            }
        });

        if(content != null){
            pages.push($('<div class="page"></div>').append(content));
        }
    });

    $('#output').html();

    var a = $('#output');

    $.each(pages, function(index, page){
      a.append(page) ;
    });
}

function loadExample(id){
    $.get("examples/example-"+id+".md", function(content){
        $("#input").val(content);
        view();
    });
}

$(function(){

    loadExample(2);

    $("#print").click(function(){
        printDiv();
    });

    $("#view").click(function(){
        view();
    });

    $(".examples").click(function(){
        loadExample($(this).data("id"));
        return false;
    })
})

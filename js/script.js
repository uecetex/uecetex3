var converter = new showdown.Converter({ extensions: ['uecetex'] });

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
//
//
// function processGenerator(line){
//
//     for(var i=0;i<generators.length;i++){
//         if(generators[i].is(line)){
//             return generators[i].toString(line);
//         }
//     }
//
//     return "";
// }

function view(){

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

    $("#output").html(converter.makeHtml(content));
}

$(function(){

    $(".floating .figure .font").width($(".font").parent().find("img").width());
    $(".floating .figure .note").width($(".note").parent().find("img").width());
    $(".floating .table .font").width($(".font").parent().find("table").width());
    $(".floating .table .note").width($(".note").parent().find("table").width());

    converter.setOption('tables', 'true');


    $("#inputs").keypress(function(){
        print();
    });
    $("#print").click(function(){
        view();
    });
})

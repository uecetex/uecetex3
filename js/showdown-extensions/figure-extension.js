var uecetex = function () {
    var figureCounter = 1;
    var figure = {
        type: 'lang',
        regex: "\\!figure\\[(.*)\\]\\[(.*)\\]\\[(.*)\\]",
        replace: function(a, caption, src, font){

            var html = "";

            html += '<div class="floating">';
            html += '<p class="caption">Figura '+figureCounter+' - '+caption+'</p>';
            html += '<center>';
            html += '<div class="figure">';
            html += '<img width="370px" src="'+src+'" />';
            html += '<p class="font">Fonte:'+font+'<p>';
            html += '<p class="note">Nota: Hoje, como ontem, as posições de Freire (1996, p. 59) com respeito à busca de novas práticas educativas ganham força e nos levam a refletir:<p>';
            html += '</div>';
            html += '</center>';
            html += '</div>';

            figureCounter++;

            return html;
        }
    };

  return [figure];
}

showdown.extension('uecetex', uecetex);

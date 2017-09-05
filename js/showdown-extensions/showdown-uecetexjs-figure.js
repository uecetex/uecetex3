(function (extension) {

    'use strict';

    // UML - Universal Module Loader
    // This enables the extension to be loaded in different environments
    if (typeof showdown !== 'undefined') {
        // global (browser or nodejs global)
        extension(showdown);
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(['showdown'], extension);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = extension(require('showdown'));
    } else {
        // showdown was not found so we throw
        throw Error('Could not find showdown library');
    }

}(function (showdown) {

    'use strict';

    //This is the extension code per se

    // Here you have a safe sandboxed environment where you can use "static code"
    // that is, code and data that is used accros instances of the extension itself
    // If you have regexes or some piece of calculation that is immutable
    // this is the best place to put them.

    // The following method will register the extension with showdown
    showdown.extension('showdown-uecetexjs-figure', function() {

        'use strict';

        var figureCounter = 1;

        return {
            type: 'lang',
            regex: "\\!figure\\[(.*)\\]\\[(.*)\\]\\[(.*)\\]",
            replace: function(a, caption, src, font){

                var html = "";

                html += '<div class="floating">';
                html += '<p class="caption">Figura '+figureCounter+' - '+caption+'</p>';
                html += '<center>';
                html += '<div class="figure" style="width: 270px">';
                html += '<img width="270px" src="'+src+'" />';
                html += '<p class="font">Fonte:'+font+'</p>';
                html += '<p class="note">Nota: Hoje, como ontem, as posições de Freire (1996, p. 59) com respeito à busca de novas práticas educativas ganham força e nos levam a refletir:</p>';
                html += '</div>';
                html += '</center>';
                html += '</div>';

                figureCounter++;

                return html;
            }
        };
    });
}));

modules.define('i-bem__dom', ['BEMHTML', 'jquery'], function(provide, BEMHTML, $, BEMDOM) {

    BEMDOM.decl('dynamic-select', {

        onSetMod: {
            'js': {
                'inited': function() {
                    var inner = $(this.findElem('inner')[0]);

                    BEMDOM.replace(inner, BEMHTML.apply(this.createTagSelectTemplate()));

                    // In order to initialize JS on select after its dynamic creation
                    var select = this.findBlockInside('select');
                    select.findElem('inner');
                }
            }
        },

        createTagSelectTemplate: function() {
            return {
                block: 'select',
                name: 'static-select',
                cls: 'static-select',
                mods: { theme : 'islands', mode : 'check', size: 'l', 'has-clear': true, width : 'available' },
                attrs: { style: 'margin-bottom: 4px;' },
                options : [
                    { val : 'none', text : 'None' }
                ],
                text: 'Placeholder...'
            }
        }

    });

    provide(BEMDOM);

});

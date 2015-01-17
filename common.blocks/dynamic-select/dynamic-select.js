// до этого использовалась устаревшая форма декларации модуля, правильно декларировать вот так:
modules.define('dynamic-select', ['i-bem__dom', 'BEMHTML'], function(provide, BEMDOM, BEMHTML) {

    provide(BEMDOM.decl(this.name, {

        onSetMod: {
            'js': {
                'inited': function() {
                    var inner = this.elem('inner'); // метод elem() кэширующий, поэтому его использовать предпочтительнее, чем findElem()

                    BEMDOM.replace(inner, BEMHTML.apply(this.createTagSelectTemplate()));

                    // в этом нет необходимости, блок автоматически инициализируется, когда его кнопка получит фокус
                    // In order to initialize JS on select after its dynamic creation
                    // var select = this.findBlockInside('select');
                    // select.findElem('inner');
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
            };
        }

    }));

});

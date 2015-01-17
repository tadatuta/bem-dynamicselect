({
    block : 'page',
    title : 'Title of the page',
    head : [
        { elem : 'css', url : '_index.css' }
    ],
    scripts: [{ elem : 'js', url : '_index.js' }],
    mods : { theme : 'islands' },
    content: [
        {
            tag: 'h2',
            content: 'Static select'
        },
        {
            tag: 'div', // не имеет смысла, т.к. div генерится по умолчанию
            content: {
                block: 'select',
                name: 'static-select',
                cls: 'static-select',
                mods: { theme : 'islands', mode : 'check', size: 'l',
                'has-clear': true, // такого модификатора у select нет
                width : 'available'
            },
                attrs: { style: 'margin-bottom: 4px;' },
                options : [
                    { val : 'none', text : 'None' }
                ],
                text: 'Placeholder...'
            }
        },
        {
            tag: 'h2',
            content: 'Dynamic select'
        },
        {
            block: 'dynamic-select',
            js: true,
            content: {
                tag: 'div', // не имеет смысла
                elem: 'inner'
            }
        }
    ]
})

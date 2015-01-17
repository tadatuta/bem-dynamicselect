([{
    mustDeps: [
        { block: 'i-bem', elem: 'dom' },
        { block: 'select', mods: { theme : 'islands', mode : 'check', size: 'l', 'has-clear': true, width : 'available' } }
    ]
},
    {
        tech : 'js',
        mustDeps : [
            { block : 'select', tech : 'bemhtml' },
            { block: 'button', tech: 'bemhtml' },
            { block: 'popup', tech: 'bemhtml'},
            { block: 'menu', tech: 'bemhtml' },
            { block: 'menu-item', tech: 'bemhtml' }
        ]
    }]);

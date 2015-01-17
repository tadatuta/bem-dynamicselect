[{
    mustDeps: [
        { block: 'i-bem', elem: 'dom' },
        { block: 'select', mods: { theme : 'islands', mode : 'check', size: 'l',
         // 'has-clear': true, // нет такого модификатора
         width : 'available' } }
    ]
},
{
    tech : 'js',
    mustDeps : [
        {
            block : 'select',
            mods: { theme : 'islands', mode : 'check', size: 'l', width : 'available' },
            tech : 'bemhtml'
        }
        // все остальное подтянется автоматически по зависимостям
        // { block: 'button', tech: 'bemhtml' },
        // { block: 'popup', tech: 'bemhtml'},
        // { block: 'menu', tech: 'bemhtml' },
        // { block: 'menu-item', tech: 'bemhtml' }
    ]
}];

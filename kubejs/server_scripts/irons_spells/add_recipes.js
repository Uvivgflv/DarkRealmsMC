ServerEvents.recipes(event =>{
    //golden spell book part
    event.shaped('kubejs:golden_spell_book_part',[
        'FAP',
        'pBp',
        'PAF'
    ],{
        F:'irons_spellbooks:magic_cloth',
        A:'createutilities:polished_amethyst',
        P:'#forge:plates/gold',
        p:'irons_spellbooks:arcane_essence',
        B:'minecraft:writable_book'
    }).id('sp:golden_spell_book_part')
    //diamond spell book part
    event.shaped('kubejs:diamond_spell_book_part',[
        'PpF',
        'ABA',
        'FpP'
    ],{
        P:'kubejs:enchanted_golden_plate',
        p:'irons_spellbooks:arcane_essence',
        F:'irons_spellbooks:magic_cloth',
        A:'kubejs:magic_powder',
        B:'minecraft:writable_book'
    }).id('sp:ddiamond_spell_book_part')
    //netherite spell book part
    event.shaped('kubejs:netherite_spell_book_part',[
        'DND',
        'FBF',
        'pef'
    ],{
        D:'kubejs:enchanted_diamond',
        N:'#forge:plates/netherite',
        F:'irons_spellbooks:magic_cloth',
        B:'minecraft:writable_book',
        p:'irons_spellbooks:arcane_essence',
        e:'#forge:gems/emerald',
        f:'reliquary:crimson_cloth'
    }).id('sp:netherite_spell_book_part')
})
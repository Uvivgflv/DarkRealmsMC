ServerEvents.recipes(event => {

    //crafting stations
    event.shaped('minecraft:furnace',[
        'BBB',
        'CFC',
        'SCS'
    ],
    {
        S:'minecraft:cobblestone',
        C:'quark:sturdy_stone',
        B:'minecraft:brick',
        F:'#minecraft:coals'
    }).id('vl:crafting_stations/furnace')

    event.shaped('minecraft:campfire',[
        ' S ',
        'SBS',
        'WWW'
    ],
    {
        S:'#forge:rods/wooden',
        B:'quark:stick_block', 
        W:'#minecraft:logs' 
    }).id('vl:crafting_stations/campfire')

    event.shaped('minecraft:blast_furnace',[
        'BIB',
        'IFI',
        'SCS'
    ],
    {
        B: 'minecraft:brick',
        I: '#forge:ingots/iron',
        F: '#vl:cobbled_furnaces',
        S: 'minecraft:smooth_stone',
        C: 'quark:sturdy_stone'
    }).id('vl:crafting_stations/blast_furnace')
    //wooden tools
    event.shaped('minecraft:wooden_pickaxe',[
        'FWF',
        ' S ',
        ' S '
    ],
    {
        W:'#minecraft:planks',
        S:'#forge:rods/wooden',
        F:'minecraft:flint'
    }).id('vl:tools/wooden/pickaxe')

    event.shaped('minecraft:wooden_axe',[
        ' WF',
        ' SF',
        ' S '
    ],
    {
        W:'#minecraft:planks',
        S:'#forge:rods/wooden',
        F:'minecraft:flint'
    }).id('vl:tools/wooden/axe')

    event.shaped('minecraft:wooden_shovel',[
        ' F ',
        'WS ',
        ' S '
    ],
    {
        W:'#minecraft:planks',
        S:'#forge:rods/wooden',
        F:'minecraft:flint'
    }).id('vl:tools/wooden/shovel')

    event.shaped('minecraft:wooden_hoe',[
        ' WF',
        ' S ',
        ' S '
    ],
    {
        W:'#minecraft:planks',
        S:'#forge:rods/wooden',
        F:'minecraft:flint'
    }).id('vl:tools/wooden/hoe')
    //stone tools
    event.shaped('minecraft:stone_pickaxe',[
        'FRF',
        ' S ',
        ' S '
    ],
    {
        F:'minecraft:flint',
        R:'quark:sturdy_stone',
        S:'#forge:rods/wooden'
    }).id('vl:tools/stone/pickaxe')

    event.shaped('minecraft:stone_axe',[
        ' RF',
        ' SF',
        ' S '
    ],
    {
        F:'minecraft:flint',
        R:'quark:sturdy_stone',
        S:'#forge:rods/wooden'
    }).id('vl:tools/stone/axe')

    event.shaped('minecraft:stone_shovel',[
        ' F ',
        'RS ',
        ' S '
    ],
    {
        F:'minecraft:flint',
        R:'quark:sturdy_stone',
        S:'#forge:rods/wooden'
    }).id('vl:tools/stone/shovel')

    event.shaped('minecraft:stone_hoe',[
        ' RF',
        ' S ',
        ' S '
    ],
    {
        F:'minecraft:flint',
        R:'quark:sturdy_stone',
        S:'#forge:rods/wooden'
    }).id('vl:tools/stone/hoe')
    //iron tools and above recipes use crafttweaker recipes with tranfer NBT tags
    //wooden weapons
    event.shaped('minecraft:wooden_sword',[
        ' F ',
        ' W ',
        ' S '
    ],
    {
        W:'#minecraft:planks',
        S:'#forge:rods/wooden',
        F:'minecraft:flint'
    }).id('vl:weapons/wooden/sword')
    
    event.shaped('minecraft:stone_sword',[
        ' F ',
        ' R ',
        ' S '
    ],{
        F:'minecraft:flint',
        R:'quark:sturdy_stone',
        S:'#forge:rods/wooden'
    }).id('vl:weapons/stone/sword')

})
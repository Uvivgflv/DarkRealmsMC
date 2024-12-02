ServerEvents.recipes(event => {

    //crafting stations
    event.shaped('minecraft:crafting_table',[
        'FF',
        'll'
    ],{
        F:'minecraft:flint',
        l:'#minecraft:logs'
    }).id('vl:crafting_table')

    event.shaped('minecraft:stonecutter',[
        ' n ',
        'nin',
        'SSS'
    ],{
        n:'#forge:nuggets/iron',
        i:'#forge:ingots/lead',
        S:'minecraft:smooth_stone'
    }).id('vl:stonecutter')

    event.shaped('minecraft:furnace',[
        'BBB',
        'CFC',
        'SCS'
    ],
    {
        S:'minecraft:cobblestone',
        C:'quark:sturdy_stone',
        B:'minecraft:brick',
        F:'minecraft:charcoal'
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

    event.shaped('minecraft:smithing_table',[
        'lll',
        'pSp',
        'pSp'
    ],{
        l:'#forge:ingots/lead',
        p:'#minecraft:planks',
        S:'minecraft:smooth_stone'
    }).id('vl:smithing_table')
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
    //netherite ingot recipe (low production)
    event.shapeless('#forge:nuggets/netherite',['4x #forge:nuggets/gold','2x kubejs:fiery_scraps', '2x minecraft:netherite_scrap']).id('vl:netherite/low_production')
    //leather armor recipes

    event.shaped('minecraft:leather_helmet',[
        'HLH',
        'L L',
        '   '
    ],{
        L:'#forge:leather',
        H:'farmersdelight:canvas'
    })

    event.shaped('minecraft:leather_chestplate',[
        'L L',
        'HLH',
        'HLH'
    ],{
        L:'#forge:leather',
        H:'farmersdelight:canvas'
    })

    event.shaped('minecraft:leather_leggings',[
        'HLH',
        'L L',
        'L L'
    ],{
        L:'#forge:leather',
        H:'farmersdelight:canvas'
    })

    event.shaped('minecraft:leather_boots',[
        '   ',
        'L L',
        'H H'
    ],{
        L:'#forge:leather',
        H:'farmersdelight:canvas'
    })
    //add other tools&blocks
    event.stonecutting('thermal:sawdust', 'farmersdelight:tree_bark').id('vl:sawdust_from_bark_fd')
    event.stonecutting('thermal:sawdust', '#immersive_weathering:bark').id('vl:sawdust_from_bark_imm')
    event.stonecutting('2x quark:gold_bars', '#forge:ingots/gold').id('vl:gold_bars')
    event.stonecutting('2x minecraft:iron_bars', '#forge:ingots/iron').id('vl:iron_bars')
    event.shapeless('minecraft:flint_and_steel',['minecraft:flint','minecraft:cobblestone']).id('vl:flint_and_steel')
    //add misc materials
    event.shapeless('4x kubejs:plant_fabric',['2x farmersdelight:canvas','2x minecraft:string']).id('vl:plant_fabric')
    event.shapeless('4x kubejs:magic_powder', ['2x kubejs:amethyst_dust', 'minecraft:redstone', 'minecraft:glowstone_dust']).id('vl:magic_powder')
    //blocks
})
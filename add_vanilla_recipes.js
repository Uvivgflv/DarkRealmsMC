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
    //iron tools
    //раобраться с этими вонючими NBT я так и не понял что ему надо
    event.smithing(
        Item.of('minecraft:iron_pickaxe').withNBT(),
        'kubejs:iron_tool_upgrade',
        'minecraft:iron_ingot',
        Item.of('minecraft:stone_pickaxe').withNBT() 
    ).id('vl:tools/iron/pickaxe')
    
    event.smithing(
        'minecraft:iron_axe',
        'kubejs:iron_tool_upgrade',
        'minecraft:iron_ingot',
        'minecraft:stone_axe'
    ).id('vl:tools/iron/axe')

    event.smithing(
        'minecraft:iron_shovel',
        'kubejs:iron_tool_upgrade',
        'minecraft:iron_ingot',
        'minecraft:stone_shovel'
    ).id('vl:tools/iron/shovel')

    event.smithing(
        'minecraft:iron_hoe',
        'kubejs:iron_tool_upgrade',
        'minecraft:iron_ingot',
        'minecraft:stone_hoe'
    ).id('vl:tools/iron/hoe')
    //golden tools
    event.smithing(
        'minecraft:golden_pickaxe',
        'kubejs:golden_tool_upgrade',
        'minecraft:gold_ingot',
        'minecraft:iron_pickaxe'
    ).id('vl:tools/golden/pickaxe')

    event.smithing(
        'minecraft:golden_axe',
        'kubejs:golden_tool_upgrade',
        'minecraft:gold_ingot',
        'minecraft:iron_axe'
    ).id('vl:tools/golden/axe')

    event.smithing(
        'minecraft:golden_shovel',
        'kubejs:golden_tool_upgrade',
        'minecraft:gold_ingot',
        'minecraft:iron_shovel'
    ).id('vl:tools/golden/shovel')

    event.smithing(
        'minecraft:golden_hoe',
        'kubejs:golden_tool_upgrade',
        'minecraft:gold_ingot',
        'minecraft:golden_hoe'
    ).id('vl:tools/golden/hoe')
    //получить все nbt с предмета, перенести nbt на результат? 
    //withNBT() 
    //diamond tools

})

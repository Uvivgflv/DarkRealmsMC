ServerEvents.recipes(event =>{
    event.shaped('kubejs:iron_tool_upgrade',[
        'iIi',
        'ISI',
        'iIi'
    ],{
        i:'#forge:nuggets/iron',
        I:'#forge:plates/iron',
        S:'minecraft:smooth_stone'
    }).id('vl:upgrades/tools/iron')
})
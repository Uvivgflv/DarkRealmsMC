ServerEvents.recipes(event =>{
    event.shaped('kubejs:golden_tool_upgrade',[
        'iIi',
        'ISI',
        'iIi'
    ],{
        i:'#forge:nuggets/gold',
        I:'#forge:plates/gold',
        S:'#forge:storage_blocks/iron'
    }).id('vl:upgrades/tools/golden')
})
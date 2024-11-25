ServerEvents.recipes(event =>{
    event.shaped('kubejs:diamond_tool_upgrade',[
        'iIi',
        'ISI',
        'iIi'
    ],{
        i:'#forge:nuggets/diamond',
        I:'minecraft:diamond',
        S:'#forge:storage_blocks/gold'
    }).id('vl:upgrades/tools/diamond')
    //earler do it on mech crafting from create
    
})
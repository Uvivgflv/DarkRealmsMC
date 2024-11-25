ServerEvents.recipes(event =>{
    event.shaped('minecraft:netherite_upgrade_smithing_template',[
        'nFn',
        'iSi',
        'nFn'
    ],{
        n: 'minecraft:netherrack',
        F: '#forge:ingots/fiery',
        i: '#forge:plates/gold',
        S: '#forge:storage_blocks/diamond'
    }).id('vl:upgrades/tools/netherite')
    //earler delete it for balance
    
})
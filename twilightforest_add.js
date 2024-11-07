ServerEvents.recipes(event => {
    //add default recipes for twilight chests
    event.shaped('twilightforest:twilight_oak_chest', [
        'WWW',
        'W W',
        'WWW'
    ],
    {
        W: 'twilightforest:twilight_oak_planks'
    }).id('tf:twilight_oak_chest')

    event.shaped('twilightforest:canopy_chest', [
        'WWW',
        'W W',
        'WWW'
    ],
    {
        W: 'twilightforest:canopy_planks'
    }).id('tf:canopy_chest')

    event.shaped('twilightforest:mangrove_chest', [
        'WWW',
        'W W',
        'WWW'
    ],
    {
        W: 'twilightforest:mangrove_planks'
    }).id('tf:mangrove_chest')

    event.shaped('twilightforest:dark_chest', [
        'WWW',
        'W W',
        'WWW'
    ],
    {
        W: 'twilightforest:dark_planks'
    }).id('tf:dark_chest')

    event.shaped('twilightforest:time_chest', [
        'WWW',
        'W W',
        'WWW'
    ],
    {
        W: 'twilightforest:time_planks'
    }).id('tf:time_chest')

    event.shaped('twilightforest:transformation_chest', [
        'WWW',
        'W W',
        'WWW'
    ],
    {
        W: 'twilightforest:transformation_planks'
    }).id('tf:transformation_chest')

    event.shaped('twilightforest:mining_chest', [
        'WWW',
        'W W',
        'WWW'
    ],
    {
        W: 'twilightforest:mining_planks'
    }).id('tf:mining_chest')

    event.shaped('twilightforest:sorting_chest', [
        'WWW',
        'W W',
        'WWW'
    ],
    {
        W: 'twilightforest:sorting_planks'
    }).id('tf:sorting_chest')
    //add materials recipes
    
    //add integrations recipes
})
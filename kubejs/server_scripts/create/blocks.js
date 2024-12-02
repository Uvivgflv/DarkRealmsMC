ServerEvents.recipes(event =>{
    /**FUNCTIONAL */
    event.shaped('create:industrial_iron_block',[
        'ppp',
        'i i',
        'ppp'
    ],{
        p:'#forge:plates/iron',
        i:'#forge:ingots/iron'
    }).id('ct:blocks/func/industrial_iron_block')


    event.stonecutting('8x create:andesite_ladder','create:andesite_alloy').id('ct:blocks/func/andesite_ladder')
    event.stonecutting('8x create:copper_ladder', '#forge:ingots/copper').id('ct:blocks/func/copper_ladder')
    event.stonecutting('8x create:brass_ladder', '#forge:ingots/brass').id('ct:blocks/func/brass_ladder')
    event.stonecutting('2x create:andesite_bars', 'create:andesite_alloy').id('ct:blocks/func/andesite_bars')
    event.stonecutting('2x create:copper_bars', '#forge:ingots/copper').id('ct:blocks/func/copper_bars')
    event.stonecutting('2x create:brass_bars', '#forge:ingots/brass').id('ct:blocks/func/brass_bars')
    event.stonecutting('2x create:andesite_scaffolding', 'create:andesite_alloy').id('ct:blocks/func/andesite_scuffolding')
    event.stonecutting('2x create:copper_scaffolding', '#forge:ingots/copper').id('ct:blocks/func/copper_scuffolding')
    event.stonecutting('2x create:brass_scaffolding', '#forge:ingots/brass').id('ct:blocks/func/brass_scuffolding')
    event.stonecutting('8x create:metal_girder', '#forge:ingots/iron').id('ct:blocks/func/metal_girder')

    /**DECORATION */
    /**STORAGE */
    event.shapeless('create:andesite_alloy_block',['9x create:andesite_alloy']).id('ct:blocks/storage/andesite_alloy_block')
    event.shapeless('create:brass_block',['9x '+'#forge:ingots/brass']).id('ct:blocks/storage/brass_block')
})
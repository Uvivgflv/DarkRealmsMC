
ServerEvents.tags('item', event => {
//raw ore blocks
    event.get('forge:storage_blocks/raw_magnetite').add('spelunkery:raw_magnetite_block')

//other helpfull tags idk
    event.get('forge:dusts/sulfur').add('tfmg:sulfur_dust')
    event.get('kubejs:grinding_stones/sulfur').add('biomesoplenty:brimstone')
    event.add('forge:dusts/sulfur', 'spelunkery:sulfur')
    event.add('kubejs:grinding_stones/sulfur', 'tfmg:sulfur')
    //event.add('minecraft:smelst_to_glass', ['yungscavebiomes:ancient_sand', 'immersive_weathering:vitrified_sand'])
    event.get('minecraft:smelts_to_glass').add(['yungscavebiomes:ancient_sand', 'immersive_weathering:vitrified_sand'])
    event.add('vl:cobbled_furnaces', ['quark:blackstone_furnace','quark:deepslate_furnace'])

    event.add('vl:andesite_casing_stones', ['minecraft:diorite','minecraft:andesite','minecraft:granite'])

    event.add('ct:raw_rose_quartz',['create:rose_quartz','biomesoplenty:rose_quartz_chunk'])

    event.add('sp:fur', ['alexsmobs:bear_fur', 'forbidden_arcanus:cloth', 'alexsmobs:bison_fur', 'kubejs:plant_fabric'])
    event.add('ct:resin_alt_craft', ['minecraft:dried_kelp', 'thermal:cured_rubber', 'tfmg:plastic_sheet'])
    
})
ServerEvents.tags('block', event => {

})
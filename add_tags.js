
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
    
})
ServerEvents.tags('block', event => {

})
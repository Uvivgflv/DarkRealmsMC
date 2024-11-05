
ServerEvents.tags('item', event => {
//raw ore blocks
    event.get('forge:storage_blocks/raw_magnetite').add('spelunkery:raw_magnetite_block')

//other helpfull tags idk
    event.get('forge:dusts/sulfur').add('tfmg:sulfur_dust')
    event.get('kubejs:grinding_stones/sulfur').add('biomesoplenty:brimstone')
    event.add('forge:dusts/sulfur', 'spelunkery:sulfur')
    event.add('kubejs:grinding_stones/sulfur', 'tfmg:sulfur')
    
})
ServerEvents.tags('block', event => {

})
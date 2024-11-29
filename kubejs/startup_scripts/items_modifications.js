ItemEvents.modification(event => {
    event.modify('kebejs:fiery_scraps', item => {
      item.maxStackSize = 64
      item.fireResistant = true
      item.rarity = 'RARE'
    })

    event.modify(/^minecraft:.*_smithing_template/, item =>{
      item.maxStackSize = 16
    })

    event.modify('kubejs:enchanted_diamond', item =>{
      item.glow(true)
    })
    event.modify('kubejs:enchanted_golden_plate', item =>{
      item.glow(true)
    })
    
    event.modify('forbidden_arcanus:darkstone_upgrade_smithing_template', item =>{
      item.maxStackSize(16)
    })
    event.modify('quark:smithing_template_rune', item =>{
      item.maxStackSize(16)
    })
    event.modify('cataclysm:ignitium_upgrade_smithing_template', item =>{
      item.maxStackSize(16)
    })
    event.modify('born_in_chaos_v1:dark_upgrade', item =>{
      item.maxStackSize(16)
    })
    event.modify('biomemakeover:cladding_upgrade_smithing_template', item =>{
      item.maxStackSize(16)
    })

  })
  
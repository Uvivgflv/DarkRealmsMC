ItemEvents.modification(event => {
    event.modify('kebejs:fiery_scraps', item => {
      item.maxStackSize = 64
      item.fireResistant = true
      item.rarity = 'RARE'
    })
  })
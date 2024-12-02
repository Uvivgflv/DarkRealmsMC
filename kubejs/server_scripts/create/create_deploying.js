ServerEvents.recipes(event => {
event.custom({ type: 'create:item_application',
  ingredients: [
    {
      tag: 'vl:andesite_casing_stones'
    },
    {
      item: 'create:andesite_alloy'
    }
    ],
    results: [
    {
      item: 'create:andesite_casing'
    }
]}).id('ct:item_application/andesite_casing')

event.custom({ type: 'create:item_application',
   ingredients: [
    {
      tag: 'vl:andesite_casing_stones'
    },
    {
      tag: 'forge:plates/copper'
    }
    ],
    results: [
    {
      item: 'create:copper_casing'
    }
]}).id('ct:item_application/copper_casing')

event.custom({ type: 'create:item_application',
  ingredients: [
   {
     item: 'minecraft:stone'
   },
   {
     item: 'create:sand_paper'
   }
   ],
  results: [
  {
    item: 'minecraft:smooth_stone'
  }
]}).id('ct:item_application/smooth_stone')
})
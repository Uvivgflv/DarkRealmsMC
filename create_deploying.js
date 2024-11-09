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
        ]})
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
            ]})
  })
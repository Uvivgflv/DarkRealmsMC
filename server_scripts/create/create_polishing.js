ServerEvents.recipes(event =>{
    event.custom({
        'type': 'create:sandpaper_polishing',
        'ingredients': [
          {
            'tag': 'ct:raw_rose_quartz'
          }
        ],
        'results': [
          {
            'item': 'create:polished_rose_quartz'
          }
        ]
    })
})
ServerEvents.entityLootTables(event => {
    
    event.modifyEntity('minecraft:enderman', table =>{
        table.addPool(pool => {
            pool.addItem('kubejs:diamond_weapon_upgrade', 1)
            pool.addCondition({
                "condition": "random_chance",
                             "chance": 0.01
            })
        })
    })
})
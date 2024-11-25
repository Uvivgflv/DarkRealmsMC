ServerEvents.entityLootTables(event => {
    
    event.modifyEntity('minecraft:wither_skeleton', table =>{
        table.addPool(pool => {
            pool.addItem('kubejs:golden_weapon_upgrade', 1)
            pool.addCondition({
                "condition": "random_chance",
                             "chance": 0.02
            })
        })
    })
})
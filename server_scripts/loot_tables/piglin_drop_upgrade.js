ServerEvents.entityLootTables(event => {
    
    event.modifyEntity('minecraft:piglin', table =>{
        table.addPool(pool => {
            pool.addItem('kubejs:netherite_weapon_upgrade', 1)
            pool.addCondition({
                "condition": "random_chance",
                             "chance": 0.01
            })
        })
    })
})
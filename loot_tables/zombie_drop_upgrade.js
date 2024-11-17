ServerEvents.entityLootTables(event => {

    event.modifyEntity('minecraft:zombie', table =>{
        table.addPool(pool => {
            pool.addItem('kubejs:iron_weapon_upgrade', 1)
            pool.addCondition({
                "condition": "random_chance",
                             "chance": 0.05
            })
           
        })
    })
})
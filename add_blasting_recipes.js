ServerEvents.recipes(event => {
    //tier 1 metalls
    event.blasting('minecraft:iron_block', '#forge:storage_blocks/raw_iron').xp(1.5).cookingTime(1200).id('vl:blasting/raw_iron_block')
    event.blasting('minecraft:copper_block', '#forge:storage_blocks/raw_copper').xp(0.8).cookingTime(1200).id('vl:blasting/raw_copper_block')
    event.blasting('create:zinc_block', '#forge:storage_blocks/raw_zinc').xp(1.0).cookingTime(1200).id('vl:blasting/raw_zinc_block')
    event.blasting('thermal:tin_block', '#forge:storage_blocks/raw_tin').xp(1.2).cookingTime(1200).id('vl:blasting/raw_tin_block')
    event.blasting('thermal:lead_block', '#forge:storage_blocks/raw_lead').xp(1.1).cookingTime(1200).id('vl:blasting/raw_lead_block')
  //tier 2 metalls
    event.blasting('minecraft:gold_block', '#forge:storage_blocks/raw_gold').xp(2.0).cookingTime(1500).id('vl:blasting/raw_gold_block')
    event.blasting('2x minecraft:iron_block', '#forge:storage_blocks/raw_magnetite').xp(2.5).cookingTime(1500).id('vl:blasting/raw_magnetite_block')
    event.blasting('thermal:silver_block', '#forge:storage_blocks/raw_silver').xp(3.0).cookingTime(1500).id('vl:blasting/raw_silver_block')
    event.blasting('thermal:nickel_block', '#forge:storage_blocks/raw_nickel').xp(2.8).cookingTime(1500).id('vl:blasting/raw_nickel_block')
    //glass blasting recipes
    event.blasting('2x minecraft:glass', '#minecraft:smelts_to_glass').xp(1.0).cookingTime(600).id('vl:blasting/glass')
})
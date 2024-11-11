import crafttweaker.api.recipe.SmithingRecipeManager;
import crafttweaker.api.item.IItemStack;
//pickaxes
    smithing.addTransformRecipe("iron_pickaxe_from_stone",
    <item:minecraft:iron_pickaxe>, //result
    <item:kubejs:iron_tool_upgrade>, //template
    <item:minecraft:stone_pickaxe>.anyDamage(), //base
    <item:minecraft:iron_ingot>);

    smithing.addTransformRecipe("golden_pickaxe_from_iron",
    <item:minecraft:golden_pickaxe>, //result
    <item:kubejs:golden_tool_upgrade>, //template
    <item:minecraft:iron_pickaxe>.anyDamage(), //base
    <item:minecraft:gold_ingot>);

    smithing.addTransformRecipe("diamond_pickaxe_from_golden",
    <item:minecraft:diamond_pickaxe>, //result
    <item:kubejs:diamond_tool_upgrade>, //template
    <item:minecraft:golden_pickaxe>.anyDamage(), //base
    <item:minecraft:diamond>);
//axes
    smithing.addTransformRecipe("iron_axe_from_stone",
    <item:minecraft:iron_axe>, //result
    <item:kubejs:iron_tool_upgrade>, //template
    <item:minecraft:stone_axe>.anyDamage(), //base
    <item:minecraft:iron_ingot>);

    smithing.addTransformRecipe("golden_axe_from_iron",
    <item:minecraft:golden_axe>, //result
    <item:kubejs:golden_tool_upgrade>, //template
    <item:minecraft:iron_axe>.anyDamage(), //base
    <item:minecraft:gold_ingot>);

    smithing.addTransformRecipe("diamond_axe_from_golden",
    <item:minecraft:diamond_axe>, //result
    <item:kubejs:diamond_tool_upgrade>, //template
    <item:minecraft:golden_axe>.anyDamage(), //base
    <item:minecraft:diamond>);
//shovels
    smithing.addTransformRecipe("iron_shovel_from_stone",
    <item:minecraft:iron_shovel>, //result
    <item:kubejs:iron_tool_upgrade>, //template
    <item:minecraft:stone_shovel>.anyDamage(), //base
    <item:minecraft:iron_ingot>);

    smithing.addTransformRecipe("golden_shovel_from_iron",
    <item:minecraft:golden_shovel>, //result
    <item:kubejs:golden_tool_upgrade>, //template
    <item:minecraft:iron_shovel>.anyDamage(), //base
    <item:minecraft:gold_ingot>);

    smithing.addTransformRecipe("diamond_shovel_from_golden",
    <item:minecraft:diamond_shovel>, //result
    <item:kubejs:diamond_tool_upgrade>, //template
    <item:minecraft:golden_shovel>.anyDamage(), //base
    <item:minecraft:diamond>);
//hoes
    smithing.addTransformRecipe("iron_hoe_from_stone",
    <item:minecraft:iron_hoe>, //result
    <item:kubejs:iron_tool_upgrade>, //template
    <item:minecraft:stone_hoe>.anyDamage(), //base
    <item:minecraft:iron_ingot>);

    smithing.addTransformRecipe("golden_hoe_from_iron",
    <item:minecraft:golden_hoe>, //result
    <item:kubejs:golden_tool_upgrade>, //template
    <item:minecraft:iron_hoe>.anyDamage(), //base
    <item:minecraft:gold_ingot>);

    smithing.addTransformRecipe("diamond_hoe_from_golden",
    <item:minecraft:diamond_hoe>, //result
    <item:kubejs:diamond_tool_upgrade>, //template
    <item:minecraft:golden_hoe>.anyDamage(), //base
    <item:minecraft:diamond>);
//netherite tools
    smithing.addTransformRecipe("netherite_pickaxe_from_diamond",
    <item:minecraft:iron_hoe>, //result
    <item:minecraft:netherite_upgrade_smithing_template>, //template
    <item:minecraft:diamond_pickaxe>.anyDamage(), //base
    <item:minecraft:netherite_ingot>);

    smithing.addTransformRecipe("netherite_axe_from_diamond",
    <item:minecraft:netherite_axe>, //result
    <item:minecraft:netherite_upgrade_smithing_template>, //template
    <item:minecraft:diamond_axe>.anyDamage(), //base
    <item:minecraft:netherite_ingot>);

    smithing.addTransformRecipe("netherite_shovel_from_diamond",
    <item:minecraft:diamond_hoe>, //result
    <item:minecraft:netherite_upgrade_smithing_template>, //template
    <item:minecraft:diamond_shovel>.anyDamage(), //base
    <item:minecraft:netherite_ingot>);

    smithing.addTransformRecipe("netherite_hoe_from_diamond",
    <item:minecraft:netherite_hoe>, //result
    <item:minecraft:netherite_upgrade_smithing_template>, //template
    <item:minecraft:diamond_hoe>.anyDamage(), //base
    <item:minecraft:netherite_ingot>);
//weapons
    smithing.addTransformRecipe("iron_sword_from_stone",
    <item:minecraft:iron_sword>, //result
    <item:kubejs:iron_tool_upgrade>, //template
    <item:minecraft:stone_sword>.anyDamage(), //base
    <item:minecraft:iron_ingot>);

    smithing.addTransformRecipe("golden_sword_from_iron",
    <item:minecraft:golden_sword>, //result
    <item:kubejs:golden_tool_upgrade>, //template
    <item:minecraft:iron_sword>.anyDamage(), //base
    <item:minecraft:gold_ingot>);

    smithing.addTransformRecipe("diamond_sword_from_golden",
    <item:minecraft:diamond_sword>, //result
    <item:kubejs:diamond_tool_upgrade>, //template
    <item:minecraft:golden_sword>.anyDamage(), //base
    <item:minecraft:diamond>);

    smithing.addTransformRecipe("netherite_sword_from_diamond",
    <item:minecraft:diamond_sword>, //result
    <item:minecraft:netherite_upgrade_smithing_template>, //template
    <item:minecraft:diamond_sword>.anyDamage(), //base
    <item:minecraft:netherite_ingot>);
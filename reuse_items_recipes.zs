import crafttweaker.api.recipe.CraftingTableRecipeManager;
import crafttweaker.api.recipe.type.CraftingRecipe;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.recipe.SmithingRecipeManager;
import crafttweaker.api.recipe.MirrorAxis;
import crafttweaker.api.item.IItemStack;
//CraftingTableRecipeManager.craftingTable;


craftingTable.addShaped("reuse_map_recipe",<item:minecraft:map>,[
    [<item:minecraft:air>,<item:minecraft:paper>,<item:minecraft:air>],
    [<item:minecraft:paper>,<item:minecraft:compass>.reuse(),<item:minecraft:paper>],
    [<item:minecraft:air>,<item:minecraft:paper>,<item:minecraft:air>]
]);

craftingTable.addShaped("iron_tool_upgrade_dublication",<item:kubejs:iron_tool_upgrade>,[
    [<tag:items:forge:nuggets/iron>,<tag:items:forge:plates/iron>,<tag:items:forge:nuggets/iron>],
    [<tag:items:forge:plates/iron>,<item:kubejs:iron_tool_upgrade>.reuse(),<tag:items:forge:plates/iron>],
    [<tag:items:forge:nuggets/iron>,<tag:items:forge:plates/iron>,<tag:items:forge:nuggets/iron>]
]);

craftingTable.addShaped("golden_tool_upgrade_dubliccation", <item:kubejs:golden_tool_upgrade>,[
    [<tag:items:forge:nuggets/gold>, <tag:items:forge:plates/gold>, <tag:items:forge:nuggets/gold>],
    [<tag:items:forge:plates/gold>, <item:kubejs:golden_tool_upgrade>.reuse(), <tag:items:forge:plates/gold>],
    [<tag:items:forge:nuggets/gold>, <tag:items:forge:plates/gold>, <tag:items:forge:nuggets/gold>]
]);

craftingTable.addShaped("diamond_tool_upgrade_dubliccation", <item:kubejs:diamond_tool_upgrade>,[
    [<tag:items:forge:nuggets/diamond>, <item:minecraft:diamond>, <tag:items:forge:nuggets/diamond>],
    [<item:minecraft:diamond>, <item:kubejs:diamond_tool_upgrade>.reuse(), <item:minecraft:diamond>],
    [<tag:items:forge:nuggets/diamond>, <item:minecraft:diamond>, <tag:items:forge:nuggets/diamond>]
]);

craftingTable.addShaped("netherite_tool_upgrade_dubliccation", <item:minecraft:netherite_upgrade_smithing_template>,[
    [<item:minecraft:netherrack>, <tag:items:forge:ingots/fiery>, <item:minecraft:netherrack>],
    [<tag:items:forge:plates/gold>, <item:minecraft:netherite_upgrade_smithing_template>.reuse(), <tag:items:forge:plates/gold>],
    [<item:minecraft:netherrack>, <tag:items:forge:ingots/fiery>, <item:minecraft:netherrack>]
]);
/**/
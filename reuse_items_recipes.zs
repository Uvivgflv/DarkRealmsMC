import crafttweaker.api.recipe.CraftingTableRecipeManager;
import crafttweaker.api.recipe.type.CraftingRecipe;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.recipe.SmithingRecipeManager;
import crafttweaker.api.recipe.MirrorAxis;
//CraftingTableRecipeManager.craftingTable;


craftingTable.addShaped("reuse_map_recipe",<item:minecraft:map>,[
    [<item:minecraft:air>,<item:minecraft:paper>,<item:minecraft:air>],
    [<item:minecraft:paper>,<item:minecraft:compass>.reuse(),<item:minecraft:paper>],
    [<item:minecraft:air>,<item:minecraft:paper>,<item:minecraft:air>]
]);
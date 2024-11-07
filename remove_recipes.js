ServerEvents.recipes(event => {

	//remove vanilla netherite ingot
	event.remove({id: 'minecraft:netherite_ingot'})
    
	//remove thermal generators
	event.remove({output: '#thermal:dynamos'})
	//remove tfmg generators 
	event.remove({output: 'tfmg:rotor'})
	event.remove({output: 'tfmg:stator'})
	//remove gunpowder recipes
	event.remove({id: 'spelunkery:gunpowder'})
	event.remove({id: 'thermal:gunpowder_4'})
	event.remove({id: 'born_in_chaos_v1:phantom_powder_k'})
	event.remove({id: 'reliquary:uncrafting/gunpowder_storm_eye'})
	event.remove({id: 'reliquary:uncrafting/gunpowder_creeper_gland'})
	event.remove({id: 'reliquary:uncrafting/gunpowder_witch_hat'})
	//remove thermal firecharge alloys&glass
	event.remove({id: 'thermal:fire_charge/lumium_ingot_4'})
	event.remove({id: 'thermal:fire_charge/signalum_ingot_4'})
	event.remove({id: 'thermal:fire_charge/enderium_ingot_2'})
	event.remove({id: 'thermal:fire_charge/invar_ingot_3'})
	event.remove({id: 'thermal:fire_charge/bronze_ingot_4'})
	event.remove({id: 'thermal:fire_charge/electrum_ingot_2'})
	event.remove({id: 'thermal:fire_charge/constant_ingot_2'})
	event.remove({id: 'thermal:fire_charge/obsidian_glass_2'})
	event.remove({id: 'thermal:fire_charge/lumium_glass_2'})
	event.remove({id: 'thermal:fire_charge/signalum_glass_2'})
	event.remove({id: 'thermal:fire_charge/enderium_glass_2'})
	//remove twforest chests recipes
	event.remove({output: 'twilightforest:canopy_chest'})			//1
	event.remove({output: 'twilightforest:twilight_oak_chest'})		//2
	event.remove({output: 'twilightforest:mangrove_chest'})			//3
	event.remove({output: 'twilightforest:dark_chest'})				//4
	event.remove({output: 'twilightforest:time_chest'})				//5
	event.remove({output: 'twilightforest:transformation_chest'})	//6
	event.remove({output: 'twilightforest:mining_chest'})			//7
	event.remove({output: 'twilightforest:sorting_chest'})			//8
	//remove vanilla tools 
	event.remove({output: /^minecraft:.*_pickaxe/})
	event.remove({output: /^minecraft:.*_axe/})
	event.remove({output: /^minecraft:.*_hoe/})
	event.remove({output: /^minecraft:.*_shovel/})
	//remove vanilla weapons
	event.remove({output: /^minecraft:.*_sword/})
	//remove vanilla armor
	event.remove({output: /^minecraft:.*_helmet/})
	event.remove({output: /^minecraft:.*_chestplate/})
	event.remove({output: /^minecraft:.*_leggings/})
	event.remove({output: /^minecraft:.*_boots/})
	//remove vanilla templates duplications
	event.remove({output: /^minecraft:.*_smithing_template/})



})

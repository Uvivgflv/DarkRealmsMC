ServerEvents.recipes(event => {
	//villager spell book
    event.custom({
        'type': 'apotheosis:enchanting',
	'conditions': [{
		'type': 'apotheosis:module',
		'module': 'enchantment'
	}],
	'input': {
		'item': 'irons_spellbooks:copper_spell_book'
	},
	'requirements': {
		'eterna': 15,
		'quanta': 10,
		'arcana': 5
	},
	'max_requirements': { 
		'eterna': -1,
		'quanta': -1,
		'arcana': -1
	},
	'display_level': 3,
	'result': {
		'item': 'irons_spellbooks:villager_spell_book',
		'count': 1
	}
    }).id('ap:village_bible')
	//blaze spell book
	event.custom({
        'type': 'apotheosis:enchanting',
	'conditions': [{
		'type': 'apotheosis:module',
		'module': 'enchantment'
	}],
	'input': {
		'item': 'irons_spellbooks:iron_spell_book'
	},
	'requirements': {
		'eterna': 30,
		'quanta': 10,
		'arcana': 30
	},
	'max_requirements': { 
		'eterna': -1,
		'quanta': -1,
		'arcana': -1
	},
	'display_level': 10,
	'result': {
		'item': 'irons_spellbooks:blaze_spell_book',
		'count': 1
	}
    }).id('ap:blaze_spell_book')
	//golden spell book
	event.custom({
        'type': 'apotheosis:enchanting',
	'conditions': [{
		'type': 'apotheosis:module',
		'module': 'enchantment'
	}],
	'input': {
		'item': 'kubejs:golden_spell_book_part'
	},
	'requirements': {
		'eterna': 45,
		'quanta': 5,
		'arcana': 5
	},
	'max_requirements': { 
		'eterna': -1,
		'quanta': -1,
		'arcana': -1
	},
	'display_level': 15,
	'result': {
		'item': 'irons_spellbooks:gold_spell_book',
		'count': 1
	}
    }).id('ap:gold_spell_book')
	//diamond spell book
	event.custom({
        'type': 'apotheosis:enchanting',
	'conditions': [{
		'type': 'apotheosis:module',
		'module': 'enchantment'
	}],
	'input': {
		'item': 'kubejs:diamond_spell_book_part'
	},
	'requirements': {
		'eterna': 45,
		'quanta': 20,
		'arcana': 5
	},
	'max_requirements': { 
		'eterna': -1,
		'quanta': -1,
		'arcana': -1
	},
	'display_level': 15,
	'result': {
		'item': 'irons_spellbooks:diamond_spell_book',
		'count': 1
	}
    }).id('ap:diamond_spell_book')
	//netherite spell book
	event.custom({
        'type': 'apotheosis:enchanting',
	'conditions': [{
		'type': 'apotheosis:module',
		'module': 'enchantment'
	}],
	'input': {
		'item': 'kubejs:netherite_spell_book_part'
	},
	'requirements': {
		'eterna': 45,
		'quanta': 10,
		'arcana': 15
	},
	'max_requirements': { 
		'eterna': -1,
		'quanta': -1,
		'arcana': -1
	},
	'display_level': 20,
	'result': {
		'item': 'irons_spellbooks:netherite_spell_book',
		'count': 1
	}
    }).id('ap:netherite_spell_book')
	//magic essence
	event.custom({
        'type': 'apotheosis:enchanting',
	'conditions': [{
		'type': 'apotheosis:module',
		'module': 'enchantment'
	}],
	'input': {
		'tag': 'sp:fur'
	},
	'requirements': {
		'eterna': 5,
		'quanta': 5,
		'arcana': 5
	},
	'max_requirements': { 
		'eterna': -1,
		'quanta': -1,
		'arcana': -1
	},
	'display_level': 3,
	'result': {
		'item': 'irons_spellbooks:arcane_essence',
		'count': 4
	}
    }).id('ap:magic_essence')
	//enchanted diamondd
	event.custom({
        'type': 'apotheosis:enchanting',
	'conditions': [{
		'type': 'apotheosis:module',
		'module': 'enchantment'
	}],
	'input': {
		'item': 'minecraft:diamond'
	},
	'requirements': {
		'eterna': 15,
		'quanta': 5,
		'arcana': 5
	},
	'max_requirements': { 
		'eterna': -1,
		'quanta': -1,
		'arcana': -1
	},
	'display_level': 5,
	'result': {
		'item': 'kubejs:enchanted_diamond',
		'count': 1
	}
    }).id('ap:enchanted_diamond')
	//enchanted golden plate
	event.custom({
        'type': 'apotheosis:enchanting',
	'conditions': [{
		'type': 'apotheosis:module',
		'module': 'enchantment'
	}],
	'input': {
		'tag': 'forge:plates/gold'
	},
	'requirements': {
		'eterna': 10,
		'quanta': 0,
		'arcana': 5
	},
	'max_requirements': { 
		'eterna': -1,
		'quanta': -1,
		'arcana': -1
	},
	'display_level': 3,
	'result': {
		'item': 'kubejs:enchanted_golden_plate',
		'count': 1
	}
    }).id('ap:enchanted_golden_plate')
})
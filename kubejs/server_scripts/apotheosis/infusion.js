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
	//
})
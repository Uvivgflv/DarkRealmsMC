ServerEvents.recipes(event => {
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
    }).id('apoth:test')
})
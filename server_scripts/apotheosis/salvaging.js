ServerEvents.recipes(event => {
    event.custom({
        'type': 'apotheosis:salvaging',
	'conditions': [{
		'type': 'apotheosis:module',
		'module': 'adventure'
	}],
	'input': {
		'item': 'kubejs:iron_weapon_upgrade'
	},
	'outputs': [{
		'min_count': 1,
		'max_count': 4,
		'stack': {
			'item': 'apotheosis:common_material'
		}
	}]
    }).id('ap:iron_upgrade_salvaging')

    event.custom({
        'type': 'apotheosis:salvaging',
	'conditions': [{
		'type': 'apotheosis:module',
		'module': 'adventure'
	}],
	'input': {
		'item': 'kubejs:golden_weapon_upgrade'
	},
	'outputs': [{
		'min_count': 1,
		'max_count': 2,
		'stack': {
			'item': 'apotheosis:uncommon_material'
		}
	}]
    }).id('ap:golden_upgrade_salvaging')

	event.custom({
        'type': 'apotheosis:salvaging',
	'conditions': [{
		'type': 'apotheosis:module',
		'module': 'adventure'
	}],
	'input': {
		'item': 'kubejs:diamond_weapon_upgrade'
	},
	'outputs': [{
		'min_count': 1,
		'max_count': 2,
		'stack': {
			'item': 'apotheosis:rare_material'
		}
	}]
    }).id('ap:diamond_upgrade_salvaging')
    
	event.custom({
        'type': 'apotheosis:salvaging',
	'conditions': [{
		'type': 'apotheosis:module',
		'module': 'adventure'
	}],
	'input': {
		'item': 'kubejs:netherite_weapon_upgrade'
	},
	'outputs': [{
		'min_count': 1,
		'max_count': 2,
		'stack': {
			'item': 'apotheosis:epic_material'
		}
	}]
    }).id('ap:netherite_upgrade_salvaging')
})
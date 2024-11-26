StartupEvents.registry('item', event => {
    //fiery scraps
    event.create('fiery_scraps').displayName('Огненные обломки').glow(true).fireResistant().rarity('RARE')
    //tools upgrades
    event.create('iron_tool_upgrade').displayName('Железное улучшение инструмента').maxStackSize(16)
    event.create('golden_tool_upgrade').displayName('Золотое улучшение инструмента').maxStackSize(16)
    event.create('diamond_tool_upgrade').displayName('Алмазное улучшение инструмента').maxStackSize(16)
    //weapons upgrtades
    event.create('iron_weapon_upgrade').displayName('Железное улучшение оружия').maxStackSize(16)
    event.create('golden_weapon_upgrade').displayName('Золотое улучшение оружия').maxStackSize(16)
    event.create('diamond_weapon_upgrade').displayName('Алмазное улучшение оружия').maxStackSize(16)
    event.create('netherite_weapon_upgrade').displayName('Незеритовое улучшение оружия').maxStackSize(16)
    //spellbooks
    event.create('diamond_spell_book_part').displayName('Основы Книги заклинаний').unstackable().rarity('RARE')
    event.create('golden_spell_book_part').displayName('Основы Зачарованной книги заклинаний').unstackable().rarity('UNCOMMON')
    event.create('netherite_spell_book_part').displayName('Основы Древнего трактата').unstackable().rarity('EPIC')
    //magic materials
    event.create('amethyst_dust').displayName('Аметистовая пыль')
    event.create('magic_powder').displayName('Ускоряющая пыль')
    event.create('enchanted_golden_plate').displayName('Зачарованный золотой лист')
    event.create('enchanted_diamond').displayName('Зачарованный алмаз')
    //misc materials
    event.create('plant_fabric').displayName('Растительное волокно')

})
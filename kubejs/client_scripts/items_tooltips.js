ItemEvents.tooltip(event => {

//Tooltips for toll upgrades
event.addAdvanced('kubejs:iron_tool_upgrade', (item, advanced, text) => {
  text.add(1, Text.gray('Железное улучшение'))
  text.add(2, Text.of(''))
  text.add(3, Text.gray('Применяется к:'))
  text.add(4, Text.blue(' Каменным инструметам'))
  text.add(5, Text.gray('Материалы:'))
  text.add(6, Text.blue(' Железный слиток'))
})

event.addAdvanced('kubejs:golden_tool_upgrade', (item, advanced, text) => {
  text.add(1, Text.gray('Золотое улучшение'))
  text.add(2, Text.of(''))
  text.add(3, Text.gray('Применяется к:'))
  text.add(4, Text.blue(' Железным инструментам'))
  text.add(5, Text.gray('Материалы:'))
  text.add(6, Text.blue(' Золотой слиток'))
})

event.addAdvanced('kubejs:diamond_tool_upgrade', (item, advanced, text) => {
  text.add(1, Text.gray('Алмазное улучшение'))
  text.add(2, Text.of(''))
  text.add(3, Text.gray('Применяется к:'))
  text.add(4, Text.blue(' Золотым инструментам'))
  text.add(5, Text.gray('Материалы:'))
  text.add(6, Text.blue(' Алмаз'))
})
//tooltips for weapon upgrades
event.addAdvanced('kubejs:iron_weapon_upgrade', (item, advanced, text) => {
  text.add(1, Text.gray('Железное улучшение'))
  text.add(2, Text.of(''))
  text.add(3, Text.gray('Применяется к:'))
  text.add(4, Text.blue(' Каменному оружию'))
  text.add(5, Text.gray('Материалы:'))
  text.add(6, Text.blue(' Железный слиток'))
})

event.addAdvanced('kubejs:golden_weapon_upgrade', (item, advanced, text) => {
  text.add(1, Text.gray('Золотое улучшение'))
  text.add(2, Text.of(''))
  text.add(3, Text.gray('Применяется к:'))
  text.add(4, Text.blue(' Железному оружию'))
  text.add(5, Text.gray('Материалы:'))
  text.add(6, Text.blue(' Золотой слиток'))
})

event.addAdvanced('kubejs:diamond_weapon_upgrade', (item, advanced, text) => {
  text.add(1, Text.gray('Алмазное улучшение'))
  text.add(2, Text.of(''))
  text.add(3, Text.gray('Применяется к:'))
  text.add(4, Text.blue(' Золотому оружию'))
  text.add(5, Text.gray('Материалы:'))
  text.add(6, Text.blue(' Алмаз'))
})

event.addAdvanced('kubejs:netherite_weapon_upgrade', (item, advanced, text) => {
  text.add(1, Text.gray('Незеритовое улучшение'))
  text.add(2, Text.of(''))
  text.add(3, Text.gray('Применяется к:'))
  text.add(4, Text.blue(' Алмазному оружию'))
  text.add(5, Text.gray('Материалы:'))
  text.add(6, Text.blue(' Незеритовый слиток'))
})

event.addAdvanced('kubejs:fiery_scraps', (item, advanced, text) => {
  text.add(1, Text.gold('Горящие обломки, поже вот-вот расплавятся').bold(true))
})


})
ServerEvents.recipes(event =>{
   event.shapeless('4x create:andesite_alloy', ['2x #vl:andesite_casing_stones','2x #forge:nuggets/zinc']).id('ct:andesite_alloy_4')

   event.shaped('8x create:shaft',[
    '   ',
    ' a ',
    ' a '
   ],{
    a:'create:andesite_alloy'
   }).id('ct:shaft_8')

   event.shaped('create:belt_connector',[
    '   ',
    'lll',
    'lll'
   ],{
    l:'minecraft:dried_kelp'
   }).id('ct:belt_connector_kelp')
   
   event.shaped('4x create:belt_connector',[
    '   ',
    'lll',
    'lll'
   ],{
    l:'thermal:cured_rubber'
   }).id('ct:belt_connector_cured_rubber')

   event.shaped('8x create:belt_connector',[
    '   ',
    'lll',
    'lll'
   ],{
    l:'tfmg:plastic_sheet'
   }).id('ct:belt_connector_plastic')

   event.shaped('4x create:andesite_tunnel',[
    'ZZZ',
    'AlA',
    '   '
   ],{
    Z:'#forge:ingots/zinc',
    A:'create:andesite_alloy',
    l:'minecraft:dried_kelp'
   }).id('ct:abdesite_tunnel_4')

   event.shaped('create:andesite_funnel',[
    'AA ',
    'll ',
    '   '
   ],{
    A:'create:andesite_alloy',
    l:'minecraft:dried_kelp'
   }).id('ct:andesite_funnel')

   event.shaped('create:mechanical_press', [
      'ZSZ',
      ' A ',
      ' C '
   ],{
      Z:'#forge:ingots/zinc',
      S:'create:shaft',
      A:'#minecraft:anvil',
      C:'create:andesite_casing'
   }).id('ct:press')

   event.shaped('create:whisk',[
      ' P ',
      ' G ',
      'P P'
   ],{
      P:'#forge:plates/iron',
      G:'#forge:gears/iron'
   }).id('ct:whisk')

   event.shaped('create:mechanical_mixer',[
      'ZCZ',
      'ZWZ',
      ' A '
   ],{
      Z:'#forge:ingots/zinc',
      C:'create:cogwheel',
      W:'create:whisk',
      A:'create:andesite_casing'
   }).id('ct:mixer')

   event.shaped('create:depot',[
      '   ',
      ' S ',
      'ZAZ'
   ],{
      S:'minecraft:stone_slab',
      Z:'#forge:ingots/zinc',
      A:'create:andesite_casing'
   }).id('ct:depot')

   event.shaped('create:basin',[
      '   ',
      'I I',
      'AAA'
   ],{
      I:'#forge:ingots/iron',
      A:'create:andesite_alloy'
   }).id('ct:basin')

   event.shaped('create:millstone',[
      ' S ',
      'CSC',
      ' A '
   ],{
      S:'minecraft:smooth_stone_slab',
      C:'create:cogwheel',
      A:'create:andesite_casing'
   }).id('ct:millstone')

   event.shaped('create:empty_blaze_burner',[
      'N N',
      'NnN',
      'III'
   ],{
      N:'minecraft:nether_brick',
      n:'minecraft:netherrack',
      I:'#forge:ingots/iron'
   }).id('ct:blaze_burner')

   event.shaped('create:hand_crank',[
      'ssp',
      '  S',
      '   '
   ],{
      s:'#forege:rods/wooden',
      p:'#minecraft:planks',
      S:'create:shaft'
   }).id('ct:hand_crank')

   event.shaped('6x create:fluid_pipe',[
      '   ',
      'pip',
      '   '
   ],{
      p:'#forge:plates/copper',
      i:'#forge:ingots/copper'
   }).id('ct:fluid_pipe_h')

   event.shaped('6x create:fluid_pipe',[
      ' p ',
      ' i ',
      ' p '
   ],{
      p:'#forge:plates/copper',
      i:'#forge:ingots/copper'
   }).id('ct:fluid_pipe_v')//alt sequesne

   event.shaped('create:electron_tube',[
      ' Q ',
      ' I ',
      '   '
   ],{
      Q:'#ct:raw_rose_quartz',
      I:'#forge:plates/iron'
   }).id('ct:electron_tube_crafting_table')//alt sequense

   event.shaped('create:spout',[
      ' C ',
      'srs',
      ' s '
   ],{
      C:'create:copper_casing',
      s:'#forge:plates/copper',
      r:'#ct:resin_alt_craft'
   }).id('ct:spout')

   event.shaped('create:item_drain',[
      '   ',
      'sBs',
      'sCs'
   ],{
      s:'#forge:plates/copper',
      B:'quark:grate',
      C:'create:copper_casing'
   }).id('ct:item_drain')

   event.shaped('create:hose_pulley',[
      'sss',
      'SCS',
      ' r '
   ],{
      s:'#forge:plates/copper',
      S:'create:shaft',
      C:'create:copper_casing',
      r:'#ct:resin_alt_craft'
   }).id('ct:hose_pulley')

   event.shaped('create:copper_valve_handle',[
      ' s ',
      'sSs',
      ' s '
   ],{
      S:'create:shaft',
      s:'#forge:plates/copper'
   }).id('ct:copper_valve_handle')

   event.shaped('4x create:fluid_tank',[
      'scs',
      'gBg',
      'scs'
   ],{
      s:'#forge:plates/copper',
      c:'#forge:ingots/copper',
      g:'#minecraft:glass',
      B:'minecraft:barrel'
   }).id('ct:fluid_tank_crafting_table')//alt sequense

   event.shaped('create:fluid_valve',[
      'PS',
      's  '
   ],{
      P:'create:fluid_pipe',
      S:'create:shaft',
      s:'#forge:plates/iron'
   }).id('ct:fluid_valve')

   


   //event.shaped()

   event.stonecutting('4x create:cogwheel', '#minecraft:planks').id('ct:stonecutting/cog')
   event.stonecutting('create:large_cogwheel', '#minecraft:planks').id('ct:stonecutting/large_cog')
})
// onEvent("server.datapack.high_priority", (event) => {
//   let chestLoot = {
//     pools: [
//       {
//         name: "aquaculture:box_loot",
//         rolls: 1,
//         entries: [
//           {
//             type: "item",
//             name: "minecraft:dirt",
//             entryName: "dirt",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:gravel",
//             entryName: "gravel",
//             weight: 5,
//           },
//           {
//             type: "item",
//             name: "minecraft:cobblestone",
//             entryName: "cobblestone",
//             weight: 5,
//           },
//           {
//             type: "item",
//             name: "minecraft:oak_sapling",
//             entryName: "oak_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:spruce_sapling",
//             entryName: "spruce_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:birch_sapling",
//             entryName: "birch_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:jungle_sapling",
//             entryName: "jungle_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:acacia_sapling",
//             entryName: "acacia_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:dark_oak_sapling",
//             entryName: "dark_oak_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "betterendforge:mossy_glowshroom_sapling",
//             entryName: "mossy_glowshroom_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "betterendforge:lacugrove_sapling",
//             entryName: "lacugrove_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "betterendforge:pythadendron_sapling",
//             entryName: "pythadendron_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "betterendforge:dragon_tree_sapling",
//             entryName: "dragon_tree_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "betterendforge:tenanea_sapling",
//             entryName: "tenanea_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "betterendforge:helix_tree_sapling",
//             entryName: "helix_tree_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "betterendforge:umbrella_tree_sapling",
//             entryName: "umbrella_tree_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "betterendforge:lucernia_sapling",
//             entryName: "lucernia_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "atum:palm_sapling",
//             entryName: "palm_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:aspen_sapling",
//             entryName: "aspen_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:baobab_sapling",
//             entryName: "baobab_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:blue_enchanted_sapling",
//             entryName: "blue_enchanted_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:blue_spruce_sapling",
//             entryName: "blue_spruce_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:brown_birch_sapling",
//             entryName: "brown_birch_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:brown_oak_sapling",
//             entryName: "brown_oak_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:cika_sapling",
//             entryName: "cika_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:cypress_sapling",
//             entryName: "cypress_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:ebony_sapling",
//             entryName: "ebony_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:fir_sapling",
//             entryName: "fir_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:green_enchanted_sapling",
//             entryName: "green_enchanted_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:holly_sapling",
//             entryName: "holly_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:jacaranda_sapling",
//             entryName: "jacaranda_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:indigo_jacaranda_sapling",
//             entryName: "indigo_jacaranda_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:mahogany_sapling",
//             entryName: "mahogany_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:mangrove_sapling",
//             entryName: "mangrove_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:maple_sapling",
//             entryName: "maple_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:orange_birch_sapling",
//             entryName: "orange_birch_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:orange_oak_sapling",
//             entryName: "orange_oak_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:orange_spruce_sapling",
//             entryName: "orange_spruce_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:orchard_sapling",
//             entryName: "orchard_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:palo_verde_sapling",
//             entryName: "palo_verde_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:pine_sapling",
//             entryName: "pine_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:pink_cherry_sapling",
//             entryName: "pink_cherry_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:rainbow_eucalyptus_sapling",
//             entryName: "rainbow_eucalyptus_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:red_birch_sapling",
//             entryName: "red_birch_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:red_maple_sapling",
//             entryName: "red_maple_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:red_oak_sapling",
//             entryName: "red_oak_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:red_spruce_sapling",
//             entryName: "red_spruce_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:redwood_sapling",
//             entryName: "redwood_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:silver_maple_sapling",
//             entryName: "silver_maple_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:white_cherry_sapling",
//             entryName: "white_cherry_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:willow_sapling",
//             entryName: "willow_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:witch_hazel_sapling",
//             entryName: "witch_hazel_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:yellow_birch_sapling",
//             entryName: "yellow_birch_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:zelkova_sapling",
//             entryName: "zelkova_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:skyris_sapling",
//             entryName: "skyris_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:palm_sapling",
//             entryName: "palm_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:araucaria_sapling",
//             entryName: "araucaria_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:brown_zelkova_sapling",
//             entryName: "brown_zelkova_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:lament_sapling",
//             entryName: "lament_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:withering_oak_sapling",
//             entryName: "withering_oak_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:ether_sapling",
//             entryName: "ether_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "byg:nightshade_sapling",
//             entryName: "nightshade_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "blue_skies:bluebright_sapling",
//             entryName: "bluebright_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "blue_skies:starlit_sapling",
//             entryName: "starlit_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "blue_skies:frostbright_sapling",
//             entryName: "frostbright_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "blue_skies:lunar_sapling",
//             entryName: "lunar_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "blue_skies:dusk_sapling",
//             entryName: "dusk_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "blue_skies:maple_sapling",
//             entryName: "maple_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "blue_skies:cherry_sapling",
//             entryName: "cherry_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "blue_skies:crescent_fruit_sapling",
//             entryName: "crescent_fruit_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "twilightforest:twilight_oak_sapling",
//             entryName: "twilight_oak_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "twilightforest:canopy_sapling",
//             entryName: "canopy_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "twilightforest:mangrove_sapling",
//             entryName: "mangrove_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "twilightforest:darkwood_sapling",
//             entryName: "darkwood_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "twilightforest:time_sapling",
//             entryName: "time_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "twilightforest:transformation_sapling",
//             entryName: "transformation_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "twilightforest:mining_sapling",
//             entryName: "mining_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "twilightforest:sorting_sapling",
//             entryName: "sorting_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "twilightforest:hollow_oak_sapling",
//             entryName: "hollow_oak_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "twilightforest:rainboak_sapling",
//             entryName: "rainboak_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "projectvibrantjourneys:fir_sapling",
//             entryName: "fir_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "projectvibrantjourneys:pine_sapling",
//             entryName: "pine_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "projectvibrantjourneys:palm_sapling",
//             entryName: "palm_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "projectvibrantjourneys:willow_sapling",
//             entryName: "willow_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "projectvibrantjourneys:mangrove_sapling",
//             entryName: "mangrove_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "projectvibrantjourneys:redwood_sapling",
//             entryName: "redwood_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "projectvibrantjourneys:baobab_sapling",
//             entryName: "baobab_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "projectvibrantjourneys:aspen_sapling",
//             entryName: "aspen_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "projectvibrantjourneys:red_maple_sapling",
//             entryName: "red_maple_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "projectvibrantjourneys:orange_maple_sapling",
//             entryName: "orange_maple_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "projectvibrantjourneys:purple_maple_sapling",
//             entryName: "purple_maple_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "projectvibrantjourneys:cottonwood_sapling",
//             entryName: "cottonwood_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "projectvibrantjourneys:juniper_sapling",
//             entryName: "juniper_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "projectvibrantjourneys:pink_sakura_sapling",
//             entryName: "pink_sakura_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "projectvibrantjourneys:white_sakura_sapling",
//             entryName: "white_sakura_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "projectvibrantjourneys:tamarack_sapling",
//             entryName: "tamarack_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "projectvibrantjourneys:joshua_sapling",
//             entryName: "joshua_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "simplefarming:apple_sapling",
//             entryName: "apple_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "simplefarming:apricot_sapling",
//             entryName: "apricot_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "simplefarming:banana_sapling",
//             entryName: "banana_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "simplefarming:cherry_sapling",
//             entryName: "cherry_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "simplefarming:mango_sapling",
//             entryName: "mango_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "simplefarming:olive_sapling",
//             entryName: "olive_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "simplefarming:orange_sapling",
//             entryName: "orange_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "simplefarming:plum_sapling",
//             entryName: "plum_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "simplefarming:pear_sapling",
//             entryName: "pear_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "ars_nouveau:blue_archwood_sapling",
//             entryName: "blue_archwood_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "ars_nouveau:red_archwood_sapling",
//             entryName: "red_archwood_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "ars_nouveau:green_archwood_sapling",
//             entryName: "green_archwood_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "ars_nouveau:purple_archwood_sapling",
//             entryName: "purple_archwood_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "undergarden:smogstem_sapling",
//             entryName: "smogstem_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "undergarden:wigglewood_sapling",
//             entryName: "wigglewood_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "undergarden:grongle_sapling",
//             entryName: "grongle_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "environmental:willow_sapling",
//             entryName: "willow_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "environmental:cherry_sapling",
//             entryName: "cherry_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "environmental:pink_wisteria_sapling",
//             entryName: "pink_wisteria_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "environmental:blue_wisteria_sapling",
//             entryName: "blue_wisteria_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "environmental:white_wisteria_sapling",
//             entryName: "white_wisteria_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "environmental:purple_wisteria_sapling",
//             entryName: "purple_wisteria_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "bayou_blues:cypress_sapling",
//             entryName: "cypress_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "upgrade_aquatic:river_sapling",
//             entryName: "river_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "autumnity:maple_sapling",
//             entryName: "maple_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "autumnity:red_maple_sapling",
//             entryName: "red_maple_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "autumnity:orange_maple_sapling",
//             entryName: "orange_maple_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "autumnity:yellow_maple_sapling",
//             entryName: "yellow_maple_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:red_mushroom",
//             entryName: "red_mushroom",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:brown_mushroom",
//             entryName: "brown_mushroom",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:crimson_fungus",
//             entryName: "crimson_fungus",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:warped_fungus",
//             entryName: "warped_fungus",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "traverse:brown_autumnal_sapling",
//             entryName: "brown_autumnal_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "traverse:red_autumnal_sapling",
//             entryName: "red_autumnal_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "traverse:yellow_autumnal_sapling",
//             entryName: "yellow_autumnal_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "traverse:orange_autumnal_sapling",
//             entryName: "orange_autumnal_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "traverse:fir_sapling",
//             entryName: "fir_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "abundance:jacaranda_sapling",
//             entryName: "jacaranda_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "abundance:redbud_sapling",
//             entryName: "redbud_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "abundance:flowering_redbud_sapling",
//             entryName: "flowering_redbud_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "atmospheric:rosewood_sapling",
//             entryName: "rosewood_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "atmospheric:morado_sapling",
//             entryName: "morado_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "atmospheric:yucca_sapling",
//             entryName: "yucca_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "atmospheric:kousa_sapling",
//             entryName: "kousa_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "atmospheric:aspen_sapling",
//             entryName: "aspen_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "atmospheric:grimwood_sapling",
//             entryName: "grimwood_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "quark:blue_blossom_sapling",
//             entryName: "blue_blossom_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "quark:lavender_blossom_sapling",
//             entryName: "lavender_blossom_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "quark:orange_blossom_sapling",
//             entryName: "orange_blossom_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "quark:pink_blossom_sapling",
//             entryName: "pink_blossom_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "quark:yellow_blossom_sapling",
//             entryName: "yellow_blossom_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "quark:red_blossom_sapling",
//             entryName: "red_blossom_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "terraincognita:apple_sapling",
//             entryName: "apple_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "terraincognita:hazel_sapling",
//             entryName: "hazel_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "forbidden_arcanus:cherrywood_sapling",
//             entryName: "cherrywood_sapling",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: 'forbidden_arcanus:mysterywood_sapling"\n',
//             entryName: 'mysterywood_sapling"\n',
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:oak_log",
//             entryName: "oak_log",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:spruce_log",
//             entryName: "spruce_log",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:birch_log",
//             entryName: "birch_log",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:jungle_log",
//             entryName: "jungle_log",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:acacia_log",
//             entryName: "acacia_log",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:dark_oak_log",
//             entryName: "dark_oak_log",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:coal",
//             entryName: "coal",
//             weight: 3,
//           },
//           {
//             type: "item",
//             name: "minecraft:charcoal",
//             entryName: "charcoal",
//             weight: 3,
//           },
//           {
//             type: "item",
//             name: "minecraft:wheat_seeds",
//             entryName: "wheat_seeds",
//             weight: 3,
//           },
//           {
//             type: "item",
//             name: "minecraft:stick",
//             entryName: "stick",
//             weight: 5,
//           },
//           {
//             type: "item",
//             name: "minecraft:bowl",
//             entryName: "bowl",
//             weight: 3,
//           },
//           {
//             type: "item",
//             name: "minecraft:leather_helmet",
//             entryName: "leather_helmet",
//             weight: 2,
//           },
//           {
//             type: "item",
//             name: "minecraft:leather_chestplate",
//             entryName: "leather_chestplate",
//             weight: 2,
//           },
//           {
//             type: "item",
//             name: "minecraft:leather_leggings",
//             entryName: "leather_leggings",
//             weight: 2,
//           },
//           {
//             type: "item",
//             name: "minecraft:leather_boots",
//             entryName: "leather_boots",
//             weight: 2,
//           },
//           {
//             type: "item",
//             name: "minecraft:flint",
//             entryName: "flint",
//             weight: 4,
//           },
//           {
//             type: "item",
//             name: "minecraft:clay_ball",
//             entryName: "clay_ball",
//             weight: 4,
//           },
//           {
//             type: "item",
//             name: "minecraft:bucket",
//             entryName: "bucket",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:leather",
//             entryName: "leather",
//             weight: 4,
//           },
//           {
//             type: "item",
//             name: "minecraft:slime_ball",
//             entryName: "slime_ball",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:sugar_cane",
//             entryName: "sugar_cane",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:bone",
//             entryName: "bone",
//             weight: 5,
//           },
//           {
//             type: "item",
//             name: "minecraft:glass_bottle",
//             entryName: "glass_bottle",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:carrot",
//             entryName: "carrot",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:potato",
//             entryName: "potato",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:vine",
//             entryName: "vine",
//             weight: 1,
//           },
//           {
//             type: "item",
//             name: "minecraft:tall_grass",
//             entryName: "tall_grass",
//             weight: 3,
//           },
//           {
//             type: "item",
//             name: "minecraft:string",
//             entryName: "string",
//             weight: 3,
//           },
//           {
//             type: "item",
//             name: "minecraft:feather",
//             entryName: "feather",
//             weight: 4,
//           },
//           {
//             type: "item",
//             name: "minecraft:apple",
//             entryName: "apple",
//             weight: 1,
//           },
//         ],
//       },
//     ],
//   };
// });

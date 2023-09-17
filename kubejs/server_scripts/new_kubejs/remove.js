onEvent("recipes", (event) => {
    let toRemove = [
        "aquamirae:divider",
        "aquamirae:whisper_of_the_abyss",
        "aquamirae:terrible_sword",

        "ars_nouveau:archmage_spell_book",
        "ars_nouveau:apprentice_spell_book",
        "ars_nouveau:ritual_flight",
        "ars_nouveau:mana_fiber",
        "ars_nouveau:ring_of_lesser_discount",

        "astralsorcery:wand",

        "betterendforge:ender_block",

        "bloodmagic:soulforge",

        "botania:terrasteel_ingot",
        "botania:mana_ring",
        "botania:reach_ring",
        "botania:bellethorne",
        "botania:thorn_chakram",
        "botania:flight_tiara",
        "botania:hyacidus",
        "botania:medumone",

        "byg:ametrine_helmet",
        "byg:ametrine_chestplate",
        "byg:ametrine_leggings",
        "byg:ametrine_boots",
        "byg:pendorite_axe",
        "byg:pendorite_sword",
        "byg:pendorite_pickaxe",
        "byg:pendorite_hoe",
        "byg:pendorite_shovel",

        "capsule:capsulemarker",

        "#cavesandcliffs:candles",

        "cataclysm:bulwark_of_the_flame",
        "cataclysm:the_incinerator",

        "create:andesite_alloy",
        "create:belt_connector",

        "cyclic:charm_longfall",
        "cyclic:uncrafter",
        "cyclic:disenchanter",
        "cyclic:slingshot",
        "cyclic:heart",
        "cyclic:heart_empty",
        "cyclic:mattock",
        "cyclic:flippers",
        "cyclic:apple_sprout_diamond",
        "cyclic:apple_diamond",
        "cyclic:apple_sprout_emerald",
        "cyclic:soulstone",
        "cyclic:crystal_boots",
        "cyclic:crystal_helmet",
        "cyclic:crystal_chestplate",
        "cyclic:crystal_leggings",
        "cyclic:crystal_sword",
        "cyclic:crystal_hoe",
        "cyclic:crystal_shovel",
        "cyclic:crystal_pickaxe",
        "cyclic:crystal_axe",
        "cyclic:charm_home",
        "cyclic:charm_world",
        "cyclic:charm_creeper",
        "cyclic:charm_antipotion",
        "cyclic:charm_fire",
        "cyclic:charm_wither",
        "cyclic:charm_void",
        "cyclic:charm_speed",
        "cyclic:apple_honey",
        "cyclic:charm_starvation",
        "cyclic:charm_fire",
        "cyclic:charm_attack_speed",
        "cyclic:ender_pearl_reuse",
        "cyclic:ender_pearl_mounted",
        "cyclic:ender_bag",
        "cyclic:teleport_wand",
        Item.of("minecraft:potion", '{Potion:"cyclic:resistance"}'),
        Item.of("minecraft:splash_potion", '{Potion:"cyclic:resistance"}'),
        Item.of("minecraft:lingering_potion", '{Potion:"cyclic:resistance"}'),
        "cyclic:lightning_scepter",
        "cyclic:fire_scepter",
        "cyclic:ice_scepter",
        "cyclic:quiver_damage",
        "cyclic:crafter",
        "cyclic:breaker",
        "cyclic:placer",
        "cyclic:water_candle",
        "cyclic:charm_xp_blocker",

        "darkutils:charm_portal",
        "darkutils:flat_tile",

        "dimdungeons:block_portal_keyhole",
        "dimdungeons:item_portal_key",
        "dimdungeons:block_key_charger",

        "eidolon:soul_enchanter",
        "eidolon:worktable",
        "eidolon:pewter_blend",

        "enigmaticlegacy:xp_scroll",
        "enigmaticlegacy:escape_scroll", // Escape doesn't work with corail tombstone.
        "enigmaticlegacy:heaven_scroll",
        "enigmaticlegacy:fabulous_scroll",
        "enigmaticlegacy:etherium_boots",
        "enigmaticlegacy:etherium_leggings",
        "enigmaticlegacy:etherium_chestplate",
        "enigmaticlegacy:cursed_stone",
        "enigmaticlegacy:etherium_helmet",
        "enigmaticlegacy:ender_rod",
        "enigmaticlegacy:cursed_stone",

        "forbidden_arcanus:mundabitur_dust",
        "forbidden_arcanus:quantum_catcher",
        "forbidden_arcanus:spectral_eye_amulet",
        "forbidden_arcanus:eternal_stella",

        "forbidden_arcanus:tyr_helmet",
        "forbidden_arcanus:tyr_chestplate",
        "forbidden_arcanus:tyr_leggings",
        "forbidden_arcanus:tyr_boots",

        "forbidden_arcanus:ender_pearl_fragment",

        "iceandfire:dragon_flute",
        "iceandfire:dragon_horn",
        "iceandfire:tide_trident",
        "iceandfire:ghost_sword",

        "engineerstools:crushing_hammer",
        "immersiverods:stick_gold",
        "engineersdecor:metal_bar",

        "industrialforegoing:machine_frame_pity",

        "mekanism:metallurgic_infuser",
        "mekanism:energy_tablet",

        "modularrouters:blank_module",
        "modularrouters:energy_output_module",

        "naturesaura:ancient_sapling",
        "naturesaura:offering_table",

        "powah:furnator_starter",
        "powah:furnator_basic",
        "powah:furnator_hardened",
        "powah:furnator_blazing",
        "powah:furnator_niotic",
        "powah:furnator_spirited",
        "powah:furnator_nitro",

        "sophisticatedbackpacks:pickup_upgrade",
        //   "sophisticatedbackpacks:advanced_pickup_upgrade",
        "sophisticatedbackpacks:filter_upgrade",
        "sophisticatedbackpacks:xp_pump_upgrade",
        "sophisticatedbackpacks:pump_upgrade",
        "sophisticatedbackpacks:battery_upgrade",
        "sophisticatedbackpacks:inception_upgrade",

        "thermal:machine_smelter",

        "tombstone:strange_tablet",
        "tombstone:voodoo_poppet",
        "tombstone:strange_scroll",
        "tombstone:scroll_of_knowledge",
        "tombstone:scroll_of_unstable_intangibility",
        "tombstone:scroll_of_lightning_resistance",
        "tombstone:scroll_of_frost_resistance",
        "tombstone:scroll_of_preservation",
        "tombstone:scroll_of_purification",

        "undergarden:catalyst",

        "waystones:waystone",
        "waystones:mossy_waystone",
        "waystones:sandy_waystone",
        "waystones:warp_plate",
        "waystones:bound_scroll",
        "waystones:sharestone",
        "waystones:sharestone",

        "xnet:controller",

        "xreliquary:angelheart_vial",
        "xreliquary:phoenix_down",
    ];

    toRemove.forEach((item) => event.remove({ output: item }));
});

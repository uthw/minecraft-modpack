onEvent("recipes", (event) => {
    let replacements = [
        // conditions
        // item being replaced
        // replacement item
        [
            { mod: "aquamirae" },
            "minecraft:diamond",
            "aquaculture:neptunium_ingot",
        ],
        [
            { mod: "aquamirae" },
            "minecraft:diamond",
            "aquaculture:neptunium_ingot",
        ],
        [
            {},
            "forbidden_arcanus:arcane_gold_ingot",
            "#forge:ingots/arcane_gold",
        ],
        [
            {},
            "forbidden_arcanus:arcane_gold_ingot",
            "#forge:ingots/arcane_gold",
        ],
        [
            { output: "ars_nouveau:blaze_fiber" },
            "minecraft:blaze_powder",
            "atum:nebu_drop",
        ],
        [
            { output: "ars_nouveau:end_fiber" },
            "minecraft:popped_chorus_fruit",
            "undergarden:forgotten_nugget",
        ],
        [
            { output: "ars_nouveau:ring_of_greater_discount" },
            "minecraft:diamond",
            "atum:nebu_ingot",
        ],
        [
            { mod: "ars_nouveau" },
            "minecraft:lapis_block",
            "forbidden_arcanus:arcane_crystal_block",
        ],
        [
            { mod: "ars_nouveau" },
            "minecraft:lapis_lazuli",
            "forbidden_arcanus:arcane_crystal",
        ],
        [
            { mod: "ars_nouveau", output: "ars_nouveau:runic_chalk" },
            "minecraft:bone_meal",
            "atum:limestone_gravel",
        ],
        [
            { mod: "ars_nouveau" },
            "minecraft:book",
            "tombstone:dust_of_vanishing",
        ],
        [{ mod: "ars_nouveau" }, "minecraft:hopper", "prettypipes:pipe"],
        [
            { output: "ars_nouveau:belt_of_levitation" },
            "#forge:feathers",
            "aquamirae:oxygelium",
        ],
        [
            { output: "ars_nouveau:ritual_fertility" },
            "minecraft:blaze_powder",
            "create:tree_fertilizer",
        ],
        [{}, "cyclic:apple_honey", "buzzier_bees:honey_apple"],
        [{ mod: "bloodmagic" }, "#forge:stone", "#supplementaries:deepslate"],
        [
            { output: "bloodmagic:alchemytable" },
            "minecraft:gold_ingot",
            "forbidden_arcanus:arcane_crystal",
        ],
        [
            { mod: "bloodmagic" },
            "minecraft:lapis_lazuli",
            "forbidden_arcanus:arcane_crystal",
        ],
        [
            { mod: "bloodmagic" },
            "minecraft:lapis_lazuli_block",
            "forbidden_arcanus:arcane_crystal_block",
        ],
        [
            { output: "bloodmagic:soulgempetty" },
            "minecraft:redstone",
            "eidolon:soul_shard",
        ],
        [
            { output: "bloodmagic:weakbloodorb" },
            "minecraft:diamond",
            "blue_skies:charoite",
        ],
        [
            { output: "bloodmagic:apprenticebloodorb" },
            "minecraft:redstone_block",
            "minecraft:diamond",
        ],
        [
            { output: "bloodmagic:magicianbloodorb" },
            "minecraft:gold_block",
            "undergarden:forgotten_nugget",
        ],
        [
            { mod: "bloodmagic" },
            "minecraft:glowstone_dust",
            "forbidden_arcanus:arcane_crystal_dust",
        ],
        [
            { mod: "botania" },
            "minecraft:blaze_powder",
            "forbidden_arcanus:arcane_crystal_dust",
        ],
        [{ mod: "botania" }, "minecraft:ender_eye", "iceandfire:ectoplasm"],
        [
            { mod: "botania" },
            "minecraft:brewing_stand",
            "eidolon:wooden_brewing_stand",
        ],
        [
            { mod: "botania" },
            "minecraft:prismarine_crystals",
            "#blue_skies:gems/aquite",
        ],
        [{ mod: "botania" }, "minecraft:quartz", "#forge:gems/fluorite"],
        [{}, "mythicbotany:alfsteel_pylon", "botania:natura_pylon"],
        [{ mod: "capsule" }, "minecraft:ender_pearl", "paraglider:spirit_orb"],
        [{}, "cavesandcliffs:amethyst_shard", "#forge:gems/amethyst"],
        [
            { output: "create:furnace_engine" },
            "minecraft:sticky_piston",
            "thermal:dynamo_stirling",
        ],
        [{ output: "create:rope_pulley" }, "#minecraft:wool", "#forge:rope"],
        [
            { output: "create:gantry_shaft" },
            "minecraft:redstone",
            "#forge:rods/nickel",
        ],
        [
            { output: "create:windmill_bearing" },
            "#forge:stone",
            "create:copper_casing",
        ],
        [
            { output: "create:large_cogwheel" },
            "create:andesite_alloy",
            "#forge:gears/tin",
        ],
        [
            { output: "create:cogwheel" },
            "create:andesite_alloy",
            "#forge:gears/tin",
        ],
        [
            { output: "create:filter" },
            "#minecraft:wool",
            "immersiveengineering:hemp_fabric",
        ],
        [
            { output: "create:attribute_filter" },
            "#minecraft:wool",
            "immersiveengineering:hemp_fabric",
        ],
        [
            { output: "createaddition:rolling_mill" },
            "create:andesite_alloy",
            "#forge:ingots/zinc",
        ],
        [
            { output: "create:brass_funnel" },
            "minecraft:dried_kelp",
            "immersiveengineering:hemp_fabric",
        ],
        [{}, "cyclic:apple_honey", "buzzier_bees:honey_apple"],
        [
            { output: "darkutils:charm_experience" },
            "minecraft:emerald",
            "forbidden_arcanus:xpetrified_orb",
        ],
        [
            { output: "darkutils:charm_experience" },
            "minecraft:xp_bottle",
            "enigmaticlegacy:tattered_tome",
        ],
        [{}, "eidolon:arcane_gold_ingot", "#forge:ingots/arcane_gold"],
        [
            { output: "engineersdecor:small_solar_panel" },
            "minecraft:quartz",
            "powah:photoelectric_pane",
        ],
        [
            { output: "engineersdecor:small_solar_panel" },
            "#forge:storage_blocks/lead",
            "#forge:storage_blocks/aluminum",
        ],
        [
            { output: "immersiveengineering:cokebrick" },
            "#forge:sandstone",
            "create:gabbro",
        ],
        [
            { output: "immersiveengineering:capacitor_hv" },
            "#forge:storage_blocks/lead",
            "#forge:storage_blocks/brass",
        ],
        [
            { output: "immersiveengineering:conveyor_dropping" },
            "minecraft:iron_trapdoor",
            "create:chute",
        ],
        [
            { output: "immersiveengineering:capacitor_mv" },
            "#forge:ingots/iron",
            "#blue_skies:ingots/horizonite",
        ],
        [
            { output: "immersiveengineering:windmill" },
            "#forge:ingots/iron",
            "#forge:ingots/steel",
        ],
        [
            { output: "immersiveengineering:conveyor_basic" },
            "#forge:ingots/iron",
            "#forge:ingots/aluminum",
        ],
        [{}, "engineersdecor:metal_bar", "#forge:rods/iron"],
        [
            { output: "industrialforegoing:machine_frame_simple" },
            "minecraft:nether_brick",
            "blue_skies:diopside_gem",
        ],
        [
            { output: "industrialforegoing:machine_frame_simple" },
            "minecraft:iron_ingot",
            "#forge:ingots/osmium",
        ],
        [
            { mod: "industrialforegoing" },
            "minecraft:lapis_lazuli",
            "ars_nouveau:mana_gem",
        ],
        [
            { output: "industrialforegoing:fluid_transporter_type" },
            "minecraft:ender_pearl",
            "immersivenegineering:fluid_pump",
        ],
        [
            { output: "industrialforegoing:item_transporter_type" },
            "minecraft:ender_pearl",
            "industrialforegoing:conveyor",
        ],
        [
            { output: "industrialforegoing:machine_frame_advanced" },
            "minecraft:gold_ingot",
            "blue_skies:charoite",
        ],
        [
            { output: "industrialforegoing:machine_frame_advanced" },
            "minecraft:netherite_scrap",
            "atum:nebu_ingot",
        ],
        [
            { output: "industrialforegoing:machine_frame_supreme" },
            "minecraft:diamond",
            "undergarden:cloggrum_ingot",
        ],
        [
            { mod: "industrialforegoing" },
            "#forge:gears/iron",
            "#forge:gears/silver",
        ],
        [
            { mod: "industrialforegoing" },
            "#forge:gears/iron",
            "#forge:gears/lumium",
        ],
        [
            { output: "industrialforegoing:material_stonework_factory" },
            "minecraft:diamond_pickaxe",
            "undergarden:cloggrum_pickaxe",
        ],
        [
            { mod: "industrialforegoing" },
            "minecraft:redstone",
            "thermal:rf_coil",
        ],
        [
            { mod: "industrialforegoing" },
            "minecraft:piston",
            "engineersdecor:labeled_crate",
        ],
        [
            { mod: "littlelogistics" },
            "minecraft:iron_ingot",
            "#forge:ingots/aluminum",
        ],
        [({ mod: "mcwbridges" }, "minecraft:string", "#forge:rope")],
        [
            { output: "mekanism:logistical_sorter" },
            "minecraft:piston",
            "immersiveengineering:logic_unit",
        ],
        [
            { output: "mekanismgenerators:solar_panel" },
            "#forge:glass_panes",
            "powah:photoelectric_pane",
        ],
        [
            { output: "mekanism:basic_thermodynamic_conductor" },
            "#forge:ingots/copper",
            "#forge:plates/constantan",
        ],
        [
            { mod: "modularrouters" },
            "minecraft:iron_ingot",
            "#forge:ingots/cloggrum",
        ],
        [
            { mod: "modularrouters" },
            "minecraft:iron_bars",
            "undergarden:cloggrum_bars",
        ],
        [
            { mod: "modularrouters" },
            "minecraft:gold_nugget",
            "undergarden:cloggrum_nugget",
        ],
        [
            { mod: "modularrouters" },
            "minecraft:quartz",
            "undergarden:froststeel_ingot",
        ],
        [
            { mod: "modularrouters" },
            "minecraft:paper",
            "undergarden:twistytwig",
        ],
        [
            { mod: "modularrouters" },
            "minecraft:ender_pearl",
            "forbidden_arcanus:dark_matter",
        ],
        [
            { mod: "naturesaura", type: "naturesaura_tree_ritual" },
            "minecraft:gold_ingot",
            "#forge:gems/arcane_crystal",
        ],
        [
            { mod: "naturesaura", type: "crafting_shaped" },
            "minecraft:gold_ingot",
            "#forge:gems/arcane_crystal",
        ],
        [
            { output: "naturesaura:eye" },
            "minecraft:spider_eye",
            "alexsmobs:guster_eye",
        ],
        [
            { output: "naturesaura:aura_cache" },
            "minecraft:bucket",
            "botania:mana_pool",
        ],
        [
            { output: "naturesaura:oak_generator" },
            "minecraft:bone_meal",
            "create:tree_fertilizer",
        ],
        [
            { mod: "naturesaura" },
            "minecraft:brewing_stand",
            "eidolon:wooden_brewing_stand",
        ],
        [{ mod: "naturesaura" }, "minecraft:ghast_tear", "#forge:ectoplasms"],
        [
            { mod: "naturesaura" },
            "minecraft:mossy_cobblestone",
            "cavesandcliffs:moss_block",
        ],
        [
            { mod: "naturesaura" },
            "minecraft:ender_pearl",
            "paraglider:spirit_orb",
        ],
        [
            { output: "powah:dielectric_paste" },
            "minecraft:clay_ball",
            "architects_palette:algal_blend",
        ],
        [
            { output: "powah:dielectric_paste" },
            "#minecraft:coals",
            "#forge:silicon",
        ],
        [
            { output: "powah:capacitor_basic" },
            "minecraft:redstone_block",
            "thermal:rf_coil",
        ],
        [
            { output: "powah:capacitor_basic" },
            "minecraft:iron_ingot",
            "#forge:plates/iron",
        ],
        [
            { output: "powah:thermoelectric_paste" },
            "minecraft:blaze_powder",
            "create:super_glue",
        ],
        [
            { output: "powah:dielectric_rod" },
            "minecraft:iron_bars",
            "prettypipes:pipe",
        ],
        [
            { output: "powah:dielectric_rod_horizontal" },
            "minecraft:iron_bars",
            "prettypipes:pipe",
        ],
        [
            { output: "powah:photoelectric_pane" },
            "minecraft:lapis_lazuli",
            "#forge:silicon",
        ],
        [
            { mod: "refinedstorage" },
            "refinedstorage:quartz_enriched_iron",
            "#forge:ingots/aluminum",
        ],
        [
            { mod: "refinedstorage" },
            "minecraft:redstone",
            "blue_skies:moonstone_shard",
        ],
        [
            { output: "sophisticatedbackpacks:magnet_upgrade" },
            "minecraft:diamond",
            "enigmaticlegacy:magnet_ring",
        ],
        [
            { mod: "sophisticatedbackpacks" },
            "minecraft:redstone",
            "#forge:gems/cinnabar",
        ],
        [
            { mod: "sophisticatedbackpacks" },
            "minecraft:netherite_block",
            "#forge:storage_blocks/steel",
        ],
        [
            { output: "sophisticatedbackpacks:advanced_puup_upgrade" },
            "minecraft:dispenser",
            "rangedpumps:pump",
        ],
        [
            { output: "sophisticatedbackpacks:tank_upgrade" },
            "#forge:glass",
            "thermal:cured_rubber",
        ],
        [
            { output: "thermal:machine_frame" },
            "minecraft:iron_ingot",
            "#forge:plates/iron",
        ],
        [
            { output: "thermal:rf_coil" },
            "minecraft:gold_ingot",
            "#forge:rods/gold",
        ],
        [
            { output: "thermal:rubber" },
            "minecraft:dandelion",
            "#minecraft:flowers",
        ],
        [{}, "minecraft:crafting_table", "#forge:workbench"],
        [{}, "xnet:machine_frame", "thermal:machine_frame"],
        [{}, "xreliquary:zombie_heart", "eidolon:zombie_heart"],
        [
            { output: "xreliquary:bullets/neutral_bullet" },
            "minecraft:gold_nugget",
            "#forge:nuggets/lead",
        ],
    ];

    replacements.forEach((item) =>
        event.replaceInput(item[0], item[1], item[2])
    );
});
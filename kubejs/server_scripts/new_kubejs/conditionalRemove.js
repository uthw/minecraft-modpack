onEvent("recipes", (event) => {
    let toRemove = [
        { output: "atum:nebu_drop", type: "smelting", type: "blasting" },
        { output: "create:white_sail", input: "#minecraft:wool" },
        // { id: "ars_nouveau:novice_spell_book"},
        {
            output: "refinedstorage:quartz_enriched_iron",
            input: "minecraft:quartz",
        },
        {
            output: "botania:terrasteel_ingot",
            type: "botania:terra_plate",
        },
    ];

    toRemove.forEach((item) => event.remove(item));
});

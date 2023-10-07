onEvent("recipes", (event) => {
    let recipes = [
        {
            inputs: [
                {
                    tag: "botania:petals",
                },
                {
                    tag: "botania:mystical_flowers",
                },
                {
                    tag: "botania:runes",
                },
                {
                    tag: "botania:runes",
                },
                {
                    tag: "forge:gems/arcane_crystal",
                },
                {
                    item: "naturesaura:gold_leaf",
                },
            ],
            sapling: { item: "minecraft:oak_sapling" },
            output: { item: "naturesaura:ancient_sapling", count: 2 },
            time: 120,
        },
        {
            inputs: [
                { item: "xreliquary:fertile_essence" },
                { item: "xreliquary:fertile_essence" },
                { item: "enigmaticlegacy:infinimeal" },
                { item: "ars_nouveau:mana_bloom" },
                { item: "bloodmagic:reagentgrowth" },
                { item: "bloodmagic:reagentgrowth" },
            ],
            sapling: { item: "minecraft:lily_pad" },
            output: { item: "xreliquary:fertile_lily_pad", count: 1 },
            time: 60,
        },
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: "naturesaura:tree_ritual",
            ingredients: recipe.inputs,
            sapling: recipe.sapling,
            output: recipe.output,
            time: recipe.time,
        });
    });
});

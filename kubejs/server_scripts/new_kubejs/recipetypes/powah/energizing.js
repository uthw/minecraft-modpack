onEvent("recipes", (event) => {
    let recipes = [
        {
            ingredients: [{ item: "modularrouters:blank_upgrade" }],
            energy: 250000,
            result: "modularrouters:energy_upgrade",
        },
        {
            ingredients: [
                { item: "#tconstruct:tables" },
                { tag: "forge:ingots/electrum" },
                { tag: "forge:ingots/electrum" },
                { item: "modularrouters:blank_module" },
            ],
            energy: 150000,
            result: "powersuits:tinkertable",
        },
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: "powah:energizing",
            ingredients: recipe.ingredients,
            energy: recipe.energy,
            result: { item: recipe.result },
        });
    });
});

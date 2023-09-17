onEvent("recipes", (event) => {
    let recipes = [
        [
            "3x eidolon:pewter_ingot",
            ["#forge:ingots/tin", "#forge:ingots/copper", "#forge:ingots/iron"],
            4000,
        ],
        [
            "3x eidolon:pewter_blend",
            ["#forge:dusts/tin", "#forge:dusts/copper", "#forge:dusts/iron"],
            4000,
        ],
    ];

    recipes.forEach((recipe) => {
        let re = event.recipes.thermal.smelter(recipe[0], recipe[1]);
        if (recipes[2] > 0) {
            re.energy(4000);
        } else {
            re.energy(0);
        }
    });
});

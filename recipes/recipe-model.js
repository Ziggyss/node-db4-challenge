const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipe_names");
}

function getShoppingList(id) {
  return db("shopping_list as s")
    .join("recipe_names as r", "s.recipe_id", "r.id")
    .join("ingredients as i", "s.ingredient_id", "i.id")
    .select("r.recipe_name", "shopping_list.quantity", "i.ingredient")
    .where({ "shopping_list.recipe_id": id });
}

function getInstructions(id) {
  return db("recipe_steps")
    .join("instructions", "instructions.id", "recipe_steps.step_id")
    .join("recipe_names", "recipe_steps.recipe_id", "recipe_names.id")
    .select(
      "recipe_names.recipe_name",
      "instructions.instruction",
      "recipe_steps.step_number"
    )
    .where({ recipe_id: id })
    .orderBy("step_number", "asc");
}

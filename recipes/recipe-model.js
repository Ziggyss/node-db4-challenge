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
  return db("shopping_list")
    .join(
      "ingredients",
      "recipe_names",
      "shopping_list.ingredient_id",
      "shopping_list.recipe_id"
    )
    .select(
      "recipe_names.recipe_name",
      "ingredients.ingredient",
      "shopping_list.quantity"
    )
    .where();
}

function getInstructions(id) {
  return db("recipe_steps")
    .join(
      "recipe_names",
      "instructions",
      "recipe_steps.recipe_id",
      "recipe_steps.step_id"
    )
    .select(
      "recipe_names.recipe_name",
      "instructions.instruction",
      "recipe_steps.step_number"
    )
    .where({ recipe_id: id })
    .orderBy("step_number", "asc");
}

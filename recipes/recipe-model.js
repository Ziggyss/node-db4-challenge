const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesByIngredient
};

function getRecipes() {
  return db("recipe_names");
}

function getShoppingList(id) {
  return db("shopping_list as s")
    .join("recipe_names as r", "s.recipe_id", "r.id")
    .join("ingredients as i", "s.ingredient_id", "i.id")
    .select("r.recipe_name", "s.quantity", "i.ingredient")
    .where({ recipe_id: id });
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

function getRecipesByIngredient(id){
console.log()
    return db("shopping_list as s")
    .join("ingredients as i", "i.id", "s.ingredient_id")
    .join("recipe_names as r", "r.id", "s.recipe_id")
    .select("r.recipe_name", "i.ingredient" )
    .where({"i.id": id})
}


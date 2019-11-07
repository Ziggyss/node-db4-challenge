

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shopping_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('shopping_list').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: "100"},
        {recipe_id: 1, ingredient_id: 3, quantity: "1"},
        {recipe_id: 1, ingredient_id: 4, quantity: "3"},
        {recipe_id: 1, ingredient_id: 5, quantity: "1"},
        {recipe_id: 2, ingredient_id: 2, quantity: "1"},
        {recipe_id: 2, ingredient_id: 3, quantity: "1"}
      ]);
    });
};




exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_names').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_names').insert([
        { recipe_name: 'Cheese Omelette'},
        { recipe_name: 'Frozen Pizza'},
      ]);
    });
};

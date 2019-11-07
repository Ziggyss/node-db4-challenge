exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient: "grams of cheese" },
        { ingredient: "frozen pizza" },
        { ingredient: "sprinkle of herbs" },
        { ingredient: "eggs" },
        { ingredient: "knob of butter" }
      ]);
    });
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        { instruction: "Preheat oven to 180 degrees" },
        { instruction: "Place pizza on top shelf and cook for 10 minutes" },
        { instruction: "Sprinkle with some herbs and serve" },
        { instruction: "Crack eggs into frying pan with a knob of butter" },
        { instruction: "Grate and add the cheese" },
        { instruction: "Cook for 8 minutes" }
      ]);
    });
};

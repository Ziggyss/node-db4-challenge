exports.up = function(knex) {
  return knex.schema
    .createTable("recipe_names", tbl => {
      tbl.increments();
      tbl
        .text("recipe_name", 128)
        .unique()
        .notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .text("ingredient", 128)
        .unique()
        .notNullable();
    })
    .createTable("instructions", tbl => {
      tbl.increments();
      tbl
        .text("instruction")
        .unique()
        .notNullable();
    })
    .createTable("shopping_list", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .notNullable()
        .references("id")
        .inTable("recipe_names");
      tbl
        .integer("ingredient_id")
        .notNullable()
        .references("id")
        .inTable("ingredients");
      tbl.integer("quantity");
      // .onUpdate('CASCADE')
      // .onDelete('CASCADE');
    })

    .createTable("recipe_steps", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .notNullable()
        .references("id")
        .inTable("recipe_names");
      tbl
        .integer("step_id")
        .notNullable()
        .references("id")
        .inTable("instructions");
      tbl.integer("step_number");

      // .onUpdate('CASCADE')
      // .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_steps")
    .dropTableIfExists("shopping_list")
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe_names");
};

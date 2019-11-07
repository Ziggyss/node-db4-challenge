exports.up = function(knex) {
  return knex.schema
    .createTable("recipe-names", tbl => {
      tbl.increments();
      tbl
        .text("recipe-name", 128)
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
        .text("instruction", 128)
        .unique()
        .notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe-names");
};

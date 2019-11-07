
exports.up = function(knex) {
    return knex.schema.createTable('recipe-names', tbl => {
        tbl.increments();
        tbl.text('recipe-name', 128)
        .unique()
        .notNullable();
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe-names');
};

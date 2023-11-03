exports.up = function (knex) {
  return knex.schema.createTable("books", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.text("description");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("books");
};

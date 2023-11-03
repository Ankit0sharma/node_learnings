exports.up = function (knex) {
  return knex.schema.createTable("comments", function (table) {
    table.increments("id").primary();
    table.text("text").notNullable();
    table.integer("commentableId").unsigned().notNullable();
    table.string("commented_items_type").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("comments");
};

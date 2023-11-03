exports.up = (knex) => {
  return knex.schema.createTable("pets", (table) => {
    table.increments("id").primary();
    table
      .integer("ownerId")
      .unsigned()
      .references("id")
      .inTable("persons")
      .onDelete("CASCADE");
    table.string("name");
    table.string("species");
    table.integer("age");
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists("pets");
};


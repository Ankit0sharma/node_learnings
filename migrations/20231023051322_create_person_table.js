exports.up = (knex) => {
  return knex.schema.createTable("persons", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.string("email");
    table.string("password");
    table.integer("age");
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists("persons");
};


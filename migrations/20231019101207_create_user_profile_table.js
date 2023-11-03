exports.up = function (knex) {
  return knex.schema.createTable('user_profiles', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.string('bio');
    table.integer('userId').unsigned().references('users.id');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('user_profiles');
};


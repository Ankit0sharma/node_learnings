exports.up = function(knex) {
    return knex.schema.createTable('AppUsers', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('email').unique();
      table.string('password').defaultTo('random_password');
      table.string('role').defaultTo('user');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('AppUsers');
  };
  
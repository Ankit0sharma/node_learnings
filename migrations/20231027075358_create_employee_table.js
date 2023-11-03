exports.up = function (knex) {
    return knex.schema.createTable('employees', function (table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.string('role').notNullable().checkIn(['se', 'marketer', 'HR', 'admin']);
      table.string('password').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('employees');
  };
  
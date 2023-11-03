exports.up = function(knex) {
    return knex.schema.createTable('company', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('address');
      table.string('city');
      table.string('state');
      table.string('country');
      table.string('phone');
      table.string('email');
      table.string('website');
      table.integer('employee_count');
      table.date('founded_date');
      table.float('revenue');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('company');
  };
  
exports.up = function(knex) {
    return knex.schema.createTable('worker', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('job_title');
      table.integer('age');
      table.string('email');
      table.string('phone');
      table.string('address');
      table.string('city');
      table.string('state');
      table.integer('company_id').unsigned();
      table.foreign('company_id').references('company.id');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('worker');
  };
  
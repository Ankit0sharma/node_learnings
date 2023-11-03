exports.up = function (knex) {
    return knex.schema.createTable('user_audit', function (table) {
      table.increments('id').primary();
      table.integer('user_id').notNullable();
      table.string('action').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('user_audit');
  };
  
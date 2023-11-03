exports.up = function (knex) {
  return knex.schema.createTable('products', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.decimal('price', 10, 2).notNullable();
    table.integer('quantity').notNullable().defaultTo(0); 
    table.timestamps(true, true); 
    table.unique('name'); 
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('products');
};

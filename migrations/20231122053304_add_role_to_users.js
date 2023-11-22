exports.up = function(knex) {
    return knex.schema.table('users', function(table) {
      table.string('role'); // Add the role column
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('users', function(table) {
      table.dropColumn('role'); // Drop the role column in the rollback
    });
  };
  
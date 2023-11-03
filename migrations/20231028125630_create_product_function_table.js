exports.up = function (knex) {
    const createFunctionSQL = `
      CREATE OR REPLACE FUNCTION calculate_total_price(quantity INT, price DECIMAL)
      RETURNS DECIMAL AS $$
      BEGIN
        RETURN quantity * price;
      END;
      $$ LANGUAGE plpgsql;
    `;
    return knex.raw(createFunctionSQL);
  };
  
  exports.down = function (knex) {
    const dropFunctionSQL = `
      DROP FUNCTION IF EXISTS calculate_total_price(INT, DECIMAL);
    `;
    return knex.raw(dropFunctionSQL);
  };
  
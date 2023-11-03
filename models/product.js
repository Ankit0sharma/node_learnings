const {Model} = require("../config/knex.config");

class Product extends Model {
  static get tableName() {
    return 'products';
  }
}

module.exports = Product;

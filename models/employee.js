const {Model} = require("../config/knex.config");

class Employee extends Model {
  static tableName = "employees";
};

module.exports = Employee
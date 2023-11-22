const {Model} = require("../config/knex.config");

export class AppUsers extends Model {
  static tableName = "AppUsers";
}
const {Model} = require("../config/knex.config");

class Worker extends Model {
  static get tableName() {
    return 'worker'; // Set the table name to match the one in your database
  }

  static get relationMappings() {
    const Company = require('./company'); // Import the Company model

    return {
      company: {
        relation: Model.BelongsToOneRelation,
        modelClass: Company,
        join: {
          from: 'worker.company_id',
          to: 'company.id',
        },
      },
    };
  }
}

module.exports = Worker;

const {Model} = require("../config/knex.config");

class Company extends Model {
  static get tableName() {
    return 'company'; 
  }

  static get relationMappings() {
    const Worker = require('./worker');

    return {
      workers: {
        relation: Model.HasManyRelation,
        modelClass: Worker,
        join: {
          from: 'company.id',
          to: 'worker.company_id',
        },
      },
    };
  }
}

module.exports = Company;

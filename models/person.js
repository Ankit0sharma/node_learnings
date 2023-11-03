//This has one to many relationship with Pet model.
const {Model} = require("../config/knex.config")
const Pet = require("./pet")

class Person extends Model {
  static get tableName() {
    return "persons";
  }

  static get relationMappings() {
    return {
      pets: {
        relation: Model.HasManyRelation,
        modelClass: Pet,
        join: {
          from: "persons.id",
          to: "pets.ownerId",
        },
      },
    };
  }
}

module.exports = Person;

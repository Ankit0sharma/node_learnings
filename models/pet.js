//This has one to one relationship with Person model.
const {Model} = require("../config/knex.config");
const Person = require("./person");

class Pet extends Model {
  static get tableName() {
    return "pets";
  }

  static get relationMappings() {
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: Person,
        join: {
          from: "pets.ownerId",
          to: "persons.id",
        },
      },
    };
  }
}

module.exports = Pet;

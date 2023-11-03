//Book has many to many relationship with Author Model
const {Model} = require("../config/knex.config");
const { Author } = require("./author");

class Book extends Model {
  static get tableName() {
    return "books";
  }

  static get relationMappings() {
    return {
      authors: {
        relation: Model.ManyToManyRelation,
        modelClass: Author,
        join: {
          from: "books.id",
          through: {
            from: "books_authors.book_id",
            to: "books_authors.author_id",
          },
          to: "authors.id",
        },
      },
    };
  }
}

module.exports = { Book };

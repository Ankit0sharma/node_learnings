//Book has many to many relationship with Author Model
const {Model} = require("../config/knex.config")
const { Book } = require("./book")

class Author extends Model {
  static get tableName() {
    return 'authors';
  }

  static get relationMappings() {
    return {
      books: {
        relation: Model.ManyToManyRelation,
        modelClass: Book,
        join: {
          from: 'authors.id',
          through: {
            from: 'books_authors.author_id',
            to: 'books_authors.book_id',
          },
          to: 'books.id',
        },
      }
    };
  }
}

module.exports = { Author };

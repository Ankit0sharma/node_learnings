const { Model } = require('objection');
const { Book } = require("./book")
const { Author } = require("./author");

class AuthorBook extends Model {
  static get tableName() {
    return 'books_authors'; 
  }

  static get relationMappings() {
    return {
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: Author,
        join: {
          from: 'books_authors.author_id',
          to: 'authors.id',
        },
      },
      book: {
        relation: Model.BelongsToOneRelation,
        modelClass: Book,
        join: {
          from: 'books_authors.book_id',
          to: 'books.id',
        },
      },
    };
  }
}

module.exports = AuthorBook;

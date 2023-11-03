const {Model} = require("../config/knex.config");

class AuthorBooksView extends Model {
  static get tableName() {
    return 'book_author_info'; // Set the table name to match your view
  }
}

module.exports = AuthorBooksView;

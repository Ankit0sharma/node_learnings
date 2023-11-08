const { ErrorHandler } = require('../../../lib/utils/custom.error');
const AuthorBook = require("../../../models/authorsAndBooks");
const { Book } = require("../../../models/book");

module.exports = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const authorId = req.params.authorId;
    const books = await Book.query()
      .whereIn('id', AuthorBook.query().select('book_id').where('author_id', authorId))
      .orderBy('created_at', 'desc')
      .page(page - 1, limit);
    if (books.length === 0) {
      return res.status(404).json({ message: "Author not found or has not written any books" });
    }
    return res.success(books);
  } catch (error) {
    console.error(error);
    return res.serverError(500, ErrorHandler(error));
  }
}

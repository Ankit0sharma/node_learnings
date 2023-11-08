const { ErrorHandler } = require('../../../lib/utils/custom.error');
const { Author } = require("../../../models/author");
const { Book } = require("../../../models/book");
const AuthorBook = require("../../../models/authorsAndBooks");

module.exports = async (req, res) => {
    try {
        const { authorId, bookId } = req.body;
        const author = await Author.query().findById(authorId);
        const book = await Book.query().findById(bookId);
        if (!author || !book) {
            return res.status(404).json({ error: 'Author or book not found' });
        }
        await AuthorBook.query().insert({
            author_id: authorId,
            book_id: bookId,
        });
        return res.success('Relationship added successfully');
    } catch (error) {
        return res.serverError(500, ErrorHandler(error));
    }
}
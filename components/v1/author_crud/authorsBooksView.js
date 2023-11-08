const { ErrorHandler } = require('../../../lib/utils/custom.error');
const AuthorBooksView  = require("../../../models/booksAuthorsView");

module.exports = async (req, res) => {
    try {
      const data = await AuthorBooksView.query(); 
      return res.success(data);
    } catch (error) {
      return res.serverError(500, ErrorHandler(error));
    }
  }
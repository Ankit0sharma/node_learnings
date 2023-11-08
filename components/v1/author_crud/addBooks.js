const { ErrorHandler } = require('../../../lib/utils/custom.error');
const { Book } = require("../../../models/book");

module.exports = async (req, res) => {
  try {
    const { title, description } = req.body;
    const book = await Book.query().insert({ title, description });
    return res.success(book);
  } catch (error) {
    return res.serverError(500, ErrorHandler(error));
  }
}

const { ErrorHandler } = require('../../../lib/utils/custom.error');
const { Author } = require("../../../models/author");

module.exports = async (req, res) => {
  try {
    const authors = await Author.query().select();
    return res.success(authors);
  } catch (error) {
    return res.serverError(500, ErrorHandler(error));
  }
}

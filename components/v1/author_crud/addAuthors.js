const { ErrorHandler } = require('../../../lib/utils/custom.error');
const { Author } = require("../../../models/author");

module.exports =
  async (req, res) => {
    try {
      const { name, bio } = req.body;
      const createdAuthor = await Author.query().insert({ name, bio });
      return res.success(createdAuthor);
    } catch (error) {
      return res.serverError(500, ErrorHandler(error));
    }
  }

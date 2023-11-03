const { Author } = require("../../../models/author");

module.exports = async (req, res) => {
    try {
      const authors = await Author.query().select();
      res.status(200).json(authors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
const { Author } = require("../../../models/author");

module.exports =
  async (req, res) => {
    try {
      const { name, bio } = req.body;
      const createdAuthor = await Author.query().insert({ name, bio });
      res.status(201).json(createdAuthor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

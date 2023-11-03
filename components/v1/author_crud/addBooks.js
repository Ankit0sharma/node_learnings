const { Book } = require("../../../models/book");

module.exports = async (req, res) => {
  try {
    const { title, description } = req.body;
    const book = await Book.query().insert({ title, description });
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

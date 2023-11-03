const AuthorBooksView  = require("../../../models/booksAuthorsView");

module.exports = async (req, res) => {
    try {
      const data = await AuthorBooksView.query(); 
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
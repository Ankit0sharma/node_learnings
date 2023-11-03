const Comment = require("../../../models/comment")

module.exports = async (req, res) => {
  try {
    const { text, commentableId, commented_items_type } = req.body;
    const comment = await Comment.query().insert({
      text,
      commentableId,
      commented_items_type,
    });
    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

const Comment = require("../../../models/comment")

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { type } = req.query;
    if (!type || (type !== "BlogPost" && type !== "UserProfile")) {
      return res.status(400).json({ error: "Invalid or missing 'type' parameter" });
    }
    const comments = await Comment.query()
      .where("id", id)
      .where("commented_items_type", type);
    res.status(200).json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

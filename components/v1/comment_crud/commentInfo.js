const { ErrorHandler } = require('../../../lib/utils/custom.error');
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
      return res.success(comments);
  } catch (error) {
    console.error(error);
    return res.serverError(500, ErrorHandler(error));
  }
}

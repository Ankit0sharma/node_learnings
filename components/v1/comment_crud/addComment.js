const { ErrorHandler } = require('../../../lib/utils/custom.error');
const Comment = require("../../../models/comment")

module.exports = async (req, res) => {
  try {
    const { text, commentableId, commented_items_type } = req.body;
    const comment = await Comment.query().insert({
      text,
      commentableId,
      commented_items_type,
    });
    return res.success(comment);
  } catch (error) {
    console.error(error);
    return res.serverError(500, ErrorHandler(error));
  }
}

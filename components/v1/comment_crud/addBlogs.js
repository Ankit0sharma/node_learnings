const { ErrorHandler } = require('../../../lib/utils/custom.error');
const BlogPost = require("../../../models/blog")

module.exports = async (req, res) => {
  try {
    const { title, content } = req.body;
    const blogPost = await BlogPost.query().insert({
      title,
      content,
    });
    return res.success(blogPost);
  } catch (error) {
    console.error(error);
    return res.serverError(500, ErrorHandler(error));
  }
}

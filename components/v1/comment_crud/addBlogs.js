const BlogPost = require("../../../models/blog")

module.exports = async (req, res) => {
  try {
    const { title, content } = req.body;
    const blogPost = await BlogPost.query().insert({
      title,
      content,
    });
    res.status(201).json(blogPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

const {Model} = require("objection");
const Comment = require("./comment")

//BlogPost has Polumorphic relationship with Comment Model
class BlogPost extends Model {
  static tableName = "blog_posts";

  static get relationMappings() {
    return {
      comments: {
        relation: Model.HasManyRelation,
        modelClass: Comment,
        join: {
          from: "blog_posts.id",
          to: "comments.commentableId",
          extra: { commented_items_type: 'BlogPost' },
        },
      },
    };
  }
}

module.exports = BlogPost

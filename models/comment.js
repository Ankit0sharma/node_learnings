const {Model} = require("../config/knex.config");

const BlogPost = require("./blog")
const { UserProfile } = require("./user")

// Comment model has polymorphic relationship with UserProfile and BlogPost model
class Comment extends Model {
  static tableName = "comments";

  static get relationMappings() {
    return {
      commentedItem: {
        relation: Model.PolymorphicRelation,
        models: {
          BlogPost: "BlogPost",
          UserProfile: "UserProfile",
        },
        join: {
          from: "comments.commentableId",
          to: "commented_items_type.id",
          extra: "commented_items_type.type",
        },
      },
    };
  }
}


module.exports = Comment

// This file contains one to one relationship
const {Model} = require("../config/knex.config");
const Comment = require("./comment")

class User extends Model {
  static tableName = "users";
}

//UserProfile also has Polymorphic relationship with Comment Model
class UserProfile extends Model {
  static tableName = "user_profiles";

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "user_profiles.userId",
          to: "users.id",
        },
      },
      comments: {
        relation: Model.HasManyRelation,
        modelClass: Comment,
        join: {
          from: "user_profiles.id",
          to: "comments.commentableId",
          extra: { commented_items_type: 'UserProfile' },
        },
      },
    };
  }
}


module.exports = {
  User,
  UserProfile,
};

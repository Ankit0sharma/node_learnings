const { ErrorHandler } = require('../../../lib/utils/custom.error');
const { User } = require("../../../models/user");

module.exports = async (req, res) => {
  try {
    const usersAndProfiles = await User.query()
      .select(
        "users.*",
        "user_profiles.name as profileName",
        "user_profiles.bio"
      )
      .join("user_profiles", "users.id", "user_profiles.userId");
      return res.success(usersAndProfiles);
  } catch (error) {
    return res.serverError(500, ErrorHandler(error));
  }
}

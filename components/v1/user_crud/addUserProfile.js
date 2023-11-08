const { ErrorHandler } = require('../../../lib/utils/custom.error');
const { UserProfile } = require("../../../models/user");

module.exports = async (req, res) => {
  try {
    const { name, bio, userId } = req.body;
    const profileData = await UserProfile.query().insert({
      name,
      bio,
      userId,
    });
    return res.success(profileData);
  } catch (error) {
    return res.serverError(500, ErrorHandler(error));
  }
}

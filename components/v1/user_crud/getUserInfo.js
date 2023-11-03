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
    res.json(usersAndProfiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

const { UserProfile } = require("../../../models/user");

module.exports = async (req, res) => {
  try {
    const { name, bio, userId } = req.body;
    const profileData = await UserProfile.query().insert({
      name,
      bio,
      userId,
    });
    res.json({ profileData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not create user profile" });
  }
}

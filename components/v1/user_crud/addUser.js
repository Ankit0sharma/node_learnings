const { User } = require("../../../models/user");

module.exports = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await User.query().insert({ name, email, password });

    res.json({ addedUser: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not create user" });
  }
}

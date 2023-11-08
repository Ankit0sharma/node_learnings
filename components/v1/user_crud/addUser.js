const { ErrorHandler } = require('../../../lib/utils/custom.error');
const { User } = require("../../../models/user");

module.exports = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await User.query().insert({ name, email, password });

    return res.success(newUser);
  } catch (error) {
    console.error(error);
    return res.serverError(500, ErrorHandler(error));
  }
}

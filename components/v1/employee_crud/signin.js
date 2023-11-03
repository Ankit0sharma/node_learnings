const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Employee = require("../../../models/employee");

module.exports = async (req, role, res) => {
  try {
    const { email, password } = req.body;
    const employee = await Employee.query().findOne({ email });
    if (!employee) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed",
      });
    }
    if (employee.role !== role) {
      return res.status(403).json({
        message: "Please make sure you are logging in from the right portal.",
        success: false,
      });
    }
    const passwordMatch = await bcrypt.compare(password, employee.password);
    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed",
      });
    }
    const token = jwt.sign({ userId: employee.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      success: true,
      message: "Employee logged in successfully",
      generatedToken: token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
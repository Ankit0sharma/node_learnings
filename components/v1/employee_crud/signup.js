const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Employee = require("../../../models/employee");

module.exports = async (req, role, res) => {
  try {
    const { name, email, password } = req.body;
    const isEmployeeExists = await Employee.query().findOne({
      email,
    });
    if (isEmployeeExists) {
      return res.status(400).json({
        success: false,
        message: "Employee already exists"
      });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    employeeData = await Employee.query().insert({
      name,
      email,
      role,
      password: hashedPassword,
    });
    return res.status(201).json({
      success: true,
      message: "Account created successfully, Please log in",
      createdPerson: employeeData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

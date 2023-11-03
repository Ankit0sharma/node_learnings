const Employee = require("../models/employee")

const checkRole = async (req, res, next) => {
  try {
    const userRole = req.user.role; 
    const employee = await Employee.query()
      .where('role', userRole)
      .first();
    if (!employee) {
      return res.status(401).json("Employee not found");
    }
    if (userRole !== employee.role) { // Check for an exact match
      return res.status(401).json("Sorry, you do not have access to this route");
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = checkRole;

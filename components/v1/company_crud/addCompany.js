const Company = require("../../../models/company");

module.exports = async (req, res) => {
    try {
      const company = await Company.query().insert(req.body);
      res.status(201).json(company);
    } catch (error) {
      res.status(500).json({ error: 'Error adding company' });
    }
  }
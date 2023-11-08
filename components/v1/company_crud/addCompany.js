const { ErrorHandler } = require('../../../lib/utils/custom.error');
const Company = require("../../../models/company");

module.exports = async (req, res) => {
    try {
      const company = await Company.query().insert(req.body);
      return res.success(company);
    } catch (error) {
      return res.serverError(500, ErrorHandler(error));
    }
  }
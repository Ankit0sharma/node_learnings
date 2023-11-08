const { ErrorHandler } = require('../../../lib/utils/custom.error');
const Worker = require("../../../models/worker");

module.exports = async (req, res) => {
    try {
      const worker = await Worker.query().insert(req.body);
      return res.success(worker);
    } catch (error) {
      return res.serverError(500, ErrorHandler(error));
    }
  }
const { ErrorHandler } = require('../../../lib/utils/custom.error');

module.exports = async (req, res) => {
    try {
        return res.success("welcome SE, Have a good day");
    } catch (error) {
        return res.serverError(500, ErrorHandler(error));
    }
}
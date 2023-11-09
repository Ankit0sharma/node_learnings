const { ErrorHandler } = require('../../../lib/utils/custom.error');

module.exports = async (req, res) => {
    try {
        return res.success({message:"welcome SE, Have a good day"});
    } catch (error) {
        return res.serverError(500, ErrorHandler(error));
    }
}
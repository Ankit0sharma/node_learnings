const { ErrorHandler } = require('../../../lib/utils/custom.error');

module.exports = async (req, res) => {
    console.log("user", req.user);
    try {
        return res.success("welcome HR, Have a good day");
    } catch (error) {
        return res.serverError(500, ErrorHandler(error));
    }
}
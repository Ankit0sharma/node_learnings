module.exports = async (req, res) => {
    console.log("user", req.user);
    try {
        return res.status(200).json({success: true,
            message:"welcome HR, Have a good day"})
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
          });
    }
}
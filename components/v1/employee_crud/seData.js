module.exports = async (req, res) => {
    try {
        return res.status(200).json({success: true,
            message:"welcome SE, Have a good day"})
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
          });
    }
}
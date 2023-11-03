module.exports.joiBodyMiddleware = (schema) => {
    return (req, res, next) => {
      try {
        let requestBody = req.body;
        if (!requestBody) {
          res.status(400).json({
            success: false,
            message: "Body can not be empty"
          })
        } else {
          const { error } = schema.validate(requestBody);
          if (error) {
            res.status(400).json({
                success: false,
                message: error.message
              })
          } else next();
        }
      } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
          })
      }
    };
  };
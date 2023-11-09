module.exports.canAccess = (roles) => {
  return (req, res, next) => {
      const empRole = req.user.role;
      if (roles.includes(empRole)) {
          next();
      } else
          res.displayErr(705, ErrorHandler(new Error('You are not authorized to perform this action')));
  };
};



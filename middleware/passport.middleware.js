const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const Employee = require("../models/employee");
const jwtConfig = require("../config/jwt.config")

passport.use(
  new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtConfig.secretKey
  },
    async (jwtPayload, done) => {
      try {
        const user = await Employee.query().findById(jwtPayload.userId);
        if (user) {
          return done(null, user.toJSON());
        } else {
          return done("invalid user", null);
        }
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

module.exports.jwtAuth = (req, res, next) =>
  passport.authenticate('jwt', {
    session: false
  }, (err, user, info) => {
    if (err && err.name && err.name === 'TokenExpiredError') {
      if (err || info) return res.status(401).json({ message: err.message });
    }
    if (info && info.name && info.name === 'TokenExpiredError') {
      if (err || info) return res.status(401).json({ message: info.message });
    }
    if (err || info) return res.status(401).send(err || info);
    req.user = user;
    console.log(req.user);
    return next();
  })(req, res, next);

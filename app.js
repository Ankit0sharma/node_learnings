//TODO Implemented proper role base authentication in employee's last two APIs
//TODO In company route created a proper get.all API
require("dotenv").config()
require("./middleware/passport.middleware");

const express = require("express");
const passport = require("passport");
const morgan = require('morgan');
const expressSession = require("express-session");

const appRouter = require("./routes/v1/index")
const { cronNodeCron } = require("./lib/utils/cron.service");
const schedule = require("./lib/utils/cron.service");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// It is important to use expressSession middleware before initializing Passport
app.use(
  expressSession({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1", appRouter)
//The way of calling both the function is a bit different
cronNodeCron.start();
schedule.cronNodeSchedule;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));

module.exports = app

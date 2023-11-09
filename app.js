//TODO Twilio added in config.routes.js file and Socket-io added in different branch
require("dotenv").config()
require("./middleware/passport.middleware");

const express = require("express");
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const passport = require("passport");
const morgan = require('morgan');
const expressSession = require("express-session");

const responseMiddleWare = require("./middleware/response.middleware");
const appRouter = require("./routes/v1/index")
const { cronNodeCron } = require("./lib/utils/cron.service");
const schedule = require("./lib/utils/cron.service");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const publicDirectoryPath = path.join(__dirname, './public');

app.use(express.static(publicDirectoryPath));
app.use(responseMiddleWare);
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

const generateMessage = (text) => {
  return {
    text,
    sentAt: new Date().getTime()
  }
}

io.on('connection', (socket) => {
  console.log('New WebSocket connection')

  socket.emit('message', generateMessage('Welcome to the the chat!'))
  socket.broadcast.emit('message', generateMessage('A user has joined the chat'))

  socket.on('sendMessage', (message, callback) => {
    io.emit('message', generateMessage(message))
    callback()
  })


  socket.on('disconnect', () => {
    io.emit('message', generateMessage('User has left the chat'))
  })
})

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
})

module.exports = server

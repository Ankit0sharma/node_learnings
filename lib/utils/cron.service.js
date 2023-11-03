const schedule = require('node-schedule');
var cron = require('node-cron');

const date = new Date(2023, 9, 26, 18, 30, 0);

//We can schedule it to run only one time, But with node-cron we can not do that.
//But recurrence can be done in it.
//This task will run on 26/09/2023 at 18:30 PM.
module.exports.cronNodeSchedule = schedule.scheduleJob(date, function(){
  console.log('This task will run only one time.');
});

//This will every day at 18:05 PM
module.exports.cronNodeCron = cron.schedule(' 5 18 * * *', () => {
  console.log('Running a job at 18:05 at Asia/Kolkata timezone');
}, {
  scheduled: true,
  timezone: "Asia/Kolkata"
});

//This code will run every second
// module.exports.cronNodeSchedule = schedule.scheduleJob('1 * * * * *', function(){
//     console.log('The answer to life, the universe, and everything!');
//   });
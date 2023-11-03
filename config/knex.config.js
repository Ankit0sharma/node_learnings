const knex = require('knex');
const { Model } = require('objection');

//I tried to put everything in .env file but the it is throwing error.
const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'bitcot',
    database: 'objectionJS_project',
  },
});

Model.knex(db);
module.exports ={Model} 

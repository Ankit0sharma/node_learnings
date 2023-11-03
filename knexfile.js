// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "objectionJS_project",
      user: "postgres",
      password: 'bitcot',
      host: "localhost",
    },
    migrations: {
      directory: "./migrations",
    },
  },
};

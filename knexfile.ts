module.exports = {
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database_name',
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
};
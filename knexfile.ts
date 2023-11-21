import { Knex } from 'knex';

const config: Knex.Config = {
  client: 'postgresql', // e.g., 'pg' for PostgreSQL, 'mysql' for MySQL
  connection: {
    host: 'postgres',
    user: 'postgres',
    password: 'postgres',
    database: 'enigma_db',
    port: 5432,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/db/migrations',
  },
  seeds: {
    directory: './src/db/seeds', // Change this to the directory where your seed data is stored
  },
};

export default config;

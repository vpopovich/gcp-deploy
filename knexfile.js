require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host : process.env.POSTGRES_HOST,
      port : process.env.POSTGRES_PORT || 5432,
      database: process.env.POSTGRES_DB,
      user:     process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },

  testing: {
    client: 'pg',
    connection: {
      host : process.env.POSTGRES_HOST,
      port : process.env.POSTGRES_PORT || 5432,
      database: process.env.POSTGRES_DB,
      user:     process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },

  production: {
    client: 'pg',
    connection: {
      host : process.env.POSTGRES_HOST,
      port : process.env.POSTGRES_PORT || 5432,
      database: process.env.POSTGRES_DB,
      user:     process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },
};

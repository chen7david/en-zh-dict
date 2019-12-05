// Update with your config settings.

module.exports = {

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './dev.sqlite3'
  //   }
  // },

  development: {
    client: 'postgresql',
    connection: {
      host:     '192.168.50.251',
      port:     '3001',
      database: 'en-zh',
      user:     'admin',
      password: 'admin'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/models/migrations'
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

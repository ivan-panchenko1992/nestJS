require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    options: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    },
  },
  test: {
    username: process.env.TEST_DB_USERNAME,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_NAME,
    host: process.env.TEST_DB_HOST,
    dialect: 'mysql',
    options: {
      username: process.env.TEST_DB_USERNAME,
      password: process.env.TEST_DB_PASSWORD,
      database: process.env.TEST_DB_NAME,
      host: process.env.TEST_DB_HOST,
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    },
  },
  production: {
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME,
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    dialect: 'mysql',
    options: {
      host: process.env.RDS_HOSTNAME,
      port: process.env.RDS_PORT,
      dialect: 'mysql',
      ssl: 'Amazon RDS',
      dialectOptions: {
        decimalNumbers: true,
      },
    },
  },
};

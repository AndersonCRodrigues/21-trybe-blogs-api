require('dotenv').config();

/* const environment = process.env.NODE_ENV || 'test';

const suffix = {
  dev: '-dev',
  development: '-dev',
  test: '-test',
}; */

const options = {
  url: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || '3306',
  database: process.env.MYSQL_DB_NAME || 'blogs_api',
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '1234',
  dialect: 'postgres',
  dialectOptions: {
    statementTimeout: 10,
    timezone: 'Z',
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: true, // This line will fix new error
    },
  },
  logging: process.env.DEBUG !== 'false',
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
};

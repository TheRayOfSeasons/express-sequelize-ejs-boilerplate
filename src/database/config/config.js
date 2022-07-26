import dotenv from 'dotenv';

dotenv.config();

const configs = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST || '127.0.0.1',
  dialect: 'postgres',
};

export default {
  development: configs,
  production: configs,
};

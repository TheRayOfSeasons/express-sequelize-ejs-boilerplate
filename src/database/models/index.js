import { Sequelize } from 'sequelize';
import configuration from '../config/config';

const env = process.env.NODE_ENV || 'development';
const config = configuration[env];

const setupDatabase = () => {
  let sequelize;
  if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
  } else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
  }
  sequelize.authenticate();
  return sequelize;
};

const database = setupDatabase();

export default database;

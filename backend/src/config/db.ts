import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const DB_PORT = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432;

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    logging: false, 
  }
);

export default sequelize;
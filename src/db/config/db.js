import { Sequelize } from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // Pastikan sesuai dengan DB_PORT di .env
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      requestTimeout: 30000,
      encrypt: true,
      useUTC: false,
      dateStrings: true,
      typeCast(field, next) {
        if (field.type === "DATETIME") {
          const value = field.string();
          return value ? new Date(value) : null;
        }
        return next();
      },
    },
    timezone: "+05:30",
  }
);

export default sequelize;

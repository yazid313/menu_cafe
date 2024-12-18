require("dotenv").config(); // Memuat variabel dari .env
const { Sequelize } = require("sequelize");
const password = String(process.env.DB_PASSWORD);
// Menggunakan variabel lingkungan dari .env
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  password,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // Pastikan sesuai dengan DB_PORT di .env
    dialect: process.env.DB_DIALECT,
    logging: true,
    // dialectOptions: {
    //   requestTimeout: 30000,
    //   encrypt: true,
    //   useUTC: false,
    //   dateStrings: true,
    //   typeCast(field, next) {
    //     if (field.type === "DATETIME") {
    //       const value = field.string();
    //       return value ? new Date(value) : null;
    //     }
    //     return next();
    //   },
    // },
    // timezone: "+05:30",
  }
);

export default sequelize;

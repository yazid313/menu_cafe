import { Sequelize, DataTypes } from "sequelize";

const token = {
  outlet_id: DataTypes.INTEGER,
  acces_token: DataTypes.TEXT,
  expires: DataTypes.DATE,
  ip_address: DataTypes.STRING,
};

export default token;

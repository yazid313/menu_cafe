import { Sequelize, DataTypes } from "sequelize";

const contact = {
  outlet_id: DataTypes.INTEGER,
  nama_contact: DataTypes.STRING,
  value: DataTypes.STRING,
  logo: DataTypes.STRING,
};

export default contact;

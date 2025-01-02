import { Sequelize, DataTypes } from "sequelize";

const contact = {
  outlet_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null " },
      notNull: { args: true, msg: "tidak boleh null " },
    },
  },
  nama_contact: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null" },
      notNull: { args: true, msg: "tidak boleh null" },
    },
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null" },
      notNull: { args: true, msg: "tidak boleh null" },
    },
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null" },
      notNull: { args: true, msg: "tidak boleh null" },
    },
  },
};

export default contact;

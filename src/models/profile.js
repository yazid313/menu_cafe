import { DataTypes } from "sequelize";
const profile = {
  outlet_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null id outlet " },
      notNull: { args: true, msg: "tidak boleh null id outlet" },
    },
  },
  nama_cafe: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null name" },
      notNull: { args: true, msg: "tidak boleh null name" },
    },
  },
  alamat: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null name" },
      notNull: { args: true, msg: "tidak boleh null name" },
    },
  },
  history: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null name" },
      notNull: { args: true, msg: "tidak boleh null name" },
    },
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null name" },
      notNull: { args: true, msg: "tidak boleh null name" },
    },
  },
};

export default profile;

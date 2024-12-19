import { Sequelize, DataTypes } from "sequelize";
import { encrypt } from "../validators/passwordValidation.js";

const user = {
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null name" },
      notNull: { args: true, msg: "tidak boleh null name" },
    },
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null username" },
      notNull: { args: true, msg: "tidak boleh null username" },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null email" },
      notNull: { args: true, msg: "tidak boleh null email" },
      isEmail: { args: true, msg: "email salah" },
    },

    set(value) {
      this.setDataValue("email", value.toLowerCase());
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null password" },
      notNull: { args: true, msg: "tidak boleh nul password" },
    },

    set(value) {
      this.setDataValue("password", encrypt(value, 10));
    },
  },
};
export default user;

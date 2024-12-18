"use strict";
const { encrypt } = require("../validators/passwordValidation");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
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
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};

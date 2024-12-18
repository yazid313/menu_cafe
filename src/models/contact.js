"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      contact.belongsTo(models.user, {
        foreignKey: "user_id",
      });
    }
  }
  contact.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "tidak boleh null user_id" },
          notNull: { args: true, msg: "tidak boleh null user_id" },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "tidak boleh null name" },
          notNull: { args: true, msg: "tidak boleh null name" },
        },
      },
      values: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "tidak boleh null values" },
          notNull: { args: true, msg: "tidak boleh null values" },
        },
      },
      icon: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "tidak boleh null icon" },
          notNull: { args: true, msg: "tidak boleh null icon" },
        },
      },
    },
    {
      sequelize,
      modelName: "contact",
    }
  );
  return contact;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class drink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      drink.belongsTo(models.user, {
        foreignKey: "user_id",
      });
    }
  }
  drink.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "tidak boleh null user_id" },
          notNull: { args: true, msg: "tidak boleh null user_id" },
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "tidak boleh null title" },
          notNull: { args: true, msg: "tidak boleh null title" },
        },
      },
      harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "tidak boleh null harga" },
          notNull: { args: true, msg: "tidak boleh null harga" },
        },
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "tidak boleh null foto" },
          notNull: { args: true, msg: "tidak boleh null foto" },
        },
      },
    },
    {
      sequelize,
      modelName: "drink",
    }
  );
  return drink;
};

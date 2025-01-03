import { Sequelize, DataTypes } from "sequelize";

const event = {
  outlet_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null id outlet " },
      notNull: { args: true, msg: "tidak boleh null id outlet" },
    },
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null name" },
      notNull: { args: true, msg: "tidak boleh null name" },
    },
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null values" },
      notNull: { args: true, msg: "tidak boleh null values" },
    },
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null icon" },
      notNull: { args: true, msg: "tidak boleh null icon" },
    },
  },
};

export default event;

import { Sequelize, DataTypes } from "sequelize";

const rekomendation = {
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
  photo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null icon" },
      notNull: { args: true, msg: "tidak boleh null icon" },
    },
  },
};

export default rekomendation;

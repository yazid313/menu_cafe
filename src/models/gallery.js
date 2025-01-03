import { DataTypes } from "sequelize";

const gallery = {
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
      notEmpty: { args: true, msg: "tidak boleh null title" },
      notNull: { args: true, msg: "tidak boleh null title" },
    },
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null photo" },
      notNull: { args: true, msg: "tidak boleh null photo" },
    },
  },
};

export default gallery;

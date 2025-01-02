import { Sequelize, DataTypes } from "sequelize";

const gallery = {
  outlet_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: { args: true, msg: "tidak boleh null name" },
      notNull: { args: true, msg: "tidak boleh null name" },
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
      notEmpty: { args: true, msg: "tidak boleh null foto" },
      notNull: { args: true, msg: "tidak boleh null foto" },
    },
  },
};

export default gallery;

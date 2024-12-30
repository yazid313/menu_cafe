import { Sequelize, DataTypes } from "sequelize";

const snack = {
  nama_outlet: {
    type: DataTypes.STRING,
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
};

export default snack;

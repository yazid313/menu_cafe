"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class akses_token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      akses_token.belongsTo(models.user, {
        foreignKey: "user_id",
      });
    }
  }
  akses_token.init(
    {
      user_id: DataTypes.INTEGER,
      acces_token: DataTypes.TEXT,
      expires: DataTypes.DATE,
      ip_address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "akses_token",
    }
  );
  return akses_token;
};

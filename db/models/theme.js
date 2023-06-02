'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate( { Question }) {
this.hasMany( Question, {foreignKey: 'theme_id'});
    }
  }
  Theme.init(
    {
      theme_name: {
        allowNull: false,
        type: DataTypes.TEXT
      },
     theme_img: {
      allowNull: false,
      type: DataTypes.TEXT
     },
    },
    {
      sequelize,
      modelName: 'Theme',
    }
  );
  return Theme;
};

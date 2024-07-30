const sequelize = require("../../config/sequelize");
const Unit = require("./Unit");
const AssetsCategroyType = require("./AssetsCategoryType");
// @author Madhur
const AssetsCategroy = sequelize.define(
  "asset_category",
  {
    unit_cd: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: false,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    code: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: false,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    description: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    created_at: {
      type: "DataTypes.DATE",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    // created_by: {
    //   type: "DataTypes.STRING",
    //   unique: false,
    //   allowNull: true,
    //   primaryKey: false,
    //   defaultValue: null,
    //   autoIncrement: false,
    // },
    updated_at: {
      type: "DataTypes.DATE",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },

    // last_updated_by: {
    //   type: "DataTypes.STRING",
    //   unique: false,
    //   allowNull: true,
    //   primaryKey: false,
    //   defaultValue: null,
    //   autoIncrement: false,
    // },
    active_status: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
  },
  {
    tableName: "asset_category",
    timestamps: true,
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);

AssetsCategroy.hasOne(Unit, {
  foreignKey: "code",
  sourceKey: "unit_cd",
  as: "unitMaster",
});

AssetsCategroy.hasMany(AssetsCategroyType, {
  foreignKey: "ass_cat_id",

  as: "AssetsCategroyTypeDetail",
});

module.exports = AssetsCategroy;

const sequelize = require("../../config/sequelize");
const Unit = require("./Unit");
const Assets = require("./Assets");
// @author Madhur
const AssetsCategroyType = sequelize.define(
  "asset_category_type",
  {
    unit_cd: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: false,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    ass_cat_id: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: false,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    name_ass_ty: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    descripation: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    ass_cnt: {
      type: "DataTypes.INTEGER",
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
  },
  {
    tableName: "asset_category_type",
    timestamps: true,
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);

AssetsCategroyType.hasOne(Unit, {
  foreignKey: "code",
  sourceKey: "unit_cd",
  as: "unitMaster",
});
//AssetsCategroyType.removeAttribute("id");
AssetsCategroyType.hasMany(Assets, {
  foreignKey: "ass_cat_type_id",

  as: "AssetsListDetail",
});

module.exports = AssetsCategroyType;

const sequelize = require("../../config/sequelize");
const Unit = require("./../Base/Unit");
const Department = require("./../Base/Department");
const ErpModule = sequelize.define(
  "file_master_erp",

  {
    file_id: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    file_name: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    file_type: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    file_sname: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    p_view: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    file_lname: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    file_menu_id: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    modl: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    show_flag: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    flow_path: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    icon: {
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

    updated_at: {
      type: "DataTypes.DATE",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
  },
  {
    tableName: "file_master_erp",
    timestamps: true,
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);

ErpModule.removeAttribute("id");

module.exports = ErpModule;

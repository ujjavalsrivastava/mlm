const sequelize = require("../../config/sequelize");
const Unit = require("./Unit");

// @author Madhur
const User_Unit = sequelize.define(
  "user_unit",
  {
    unit_cd: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: false,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    user_id: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: false,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    bdc_flag: {
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
    created_by: {
      type: "DataTypes.STRING",
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
    user_line_id: {
      type: "DataTypes.INTEGER",
      unique: false,
      allowNull: false,
      primaryKey: true,
      defaultValue: "nextval('user_unit_user_line_id_seq'::regclass)",
      autoIncrement: false,
    },
    user_master_id: {
      type: "DataTypes.INTEGER",
      unique: false,
      allowNull: false,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    last_updated_by: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    object_version_number: {
      type: "DataTypes.INTEGER",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
  },
  {
    tableName: "user_unit",
    timestamps: true,
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);

User_Unit.hasOne(Unit, {
  foreignKey: "code",
  sourceKey: "unit_cd",
  as: "unitMaster",
});

module.exports = User_Unit;

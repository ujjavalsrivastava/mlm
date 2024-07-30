const sequelize = require("../../../config/sequelize");

const OnBoardCheckListMast = sequelize.define(
  "onboard_check_list_mast",
  {
    unit_cd: {
      type: "DataTypes.STRING",
      unique: true,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    doc_code: {
      type: "DataTypes.STRING",
      unique: true,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    doc_name: {
      type: "DataTypes.STRING",
      unique: true,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    doc_type: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    show_seq: {
      type: "DataTypes.INTEGER",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    show_type: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: "'Y'::character varying",
      autoIncrement: false,
    },
    created_at: {
      type: "DataTypes.DATE",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: "CURRENT_TIMESTAMP",
      autoIncrement: false,
    },
    created_by: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: "'anonymous'::character varying",
      autoIncrement: false,
    },
    updated_at: {
      type: "DataTypes.DATE",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: "CURRENT_TIMESTAMP",
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
      defaultValue: "1",
      autoIncrement: false,
    },
    onboard_check_list_mast_id: {
      type: "DataTypes.INTEGER",
      unique: false,
      allowNull: false,
      primaryKey: true,
      defaultValue:
        "nextval('terms.onboard_check_list_mast_onboard_check_list_mast_id_seq'::regclass)",
      autoIncrement: false,
    },
  },
  {
    tableName: onboard_check_list_mast,
    timestamps: true,
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);

module.exports = OnBoardCheckListMast;

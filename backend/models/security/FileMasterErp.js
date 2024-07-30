const sequelize = require("../../config/sequelize");
const UserPrev = require("./../security/UserPrev");

// @author Madhur
const FileMasterErp = sequelize.define(
  "file_master_erp",
  {
    icon: {
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
      defaultValue: "NULL::character varying",
      autoIncrement: false,
    },
    t_code: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: "NULL::character varying",
      autoIncrement: false,
    },
    file_id: {
      type: "DataTypes.STRING",
      unique: true,
      allowNull: false,
      primaryKey: false,
      defaultValue: "nextval('global_seq'::regclass)",
      autoIncrement: false,
    },
    ico_file: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: "NULL::character varying",
      autoIncrement: false,
    },
    file_name: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: false,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    file_type: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: "NULL::character varying",
      autoIncrement: false,
    },
    flow_path: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: "NULL::character varying",
      autoIncrement: false,
    },
    show_flag: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: "NULL::bpchar",
      autoIncrement: false,
    },
    unit_type: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: "'ALL'::character varying",
      autoIncrement: false,
    },
    created_at: {
      type: "DataTypes.DATE",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: "NULL::timestamp without time zone",
      autoIncrement: false,
    },
    created_by: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: "NULL::character varying",
      autoIncrement: false,
    },
    file_lname: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: "NULL::character varying",
      autoIncrement: false,
    },
    file_sname: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: "NULL::character varying",
      autoIncrement: false,
    },
    run_status: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: "'S'::character varying",
      autoIncrement: false,
    },
    updated_at: {
      type: "DataTypes.DATE",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: "NULL::timestamp without time zone",
      autoIncrement: false,
    },
    file_menu_id: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: "NULL::character varying",
      autoIncrement: false,
    },
    display_order: {
      type: "DataTypes.INTEGER",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    show_flag_sme: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: "NULL::character varying",
      autoIncrement: false,
    },
    file_master_id: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    last_updated_by: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: "NULL::character varying",
      autoIncrement: false,
    },
    print_file_name: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: "NULL::character varying",
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
    tableName: "file_master_erp",
    timestamps: true,
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);

FileMasterErp.belongsTo(FileMasterErp, {
  foreignKey: "file_menu_id",
  sourceKey: "file_id",
  as: "parentFile",
});



FileMasterErp.hasOne(UserPrev, {
  foreignKey: "file_id",
  sourceKey: "file_id",
  as: "userPrevData",
});
FileMasterErp.removeAttribute("id");

module.exports = FileMasterErp;

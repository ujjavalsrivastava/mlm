const sequelize = require("../../config/sequelize");
const { DataTypes } = require("sequelize");
const User_Unit = require("./UserUnit");
const Emp_Master_Hd = require("../Employee/EmpMasterHd");

const User_Master = sequelize.define(
  "user_master",
  {
    all_privilege: { type: DataTypes.STRING },
    app_flag: { type: DataTypes.STRING },
    bdc_flag: { type: DataTypes.STRING },
    confirm_pwd: { type: DataTypes.STRING },
    created_at: { type: DataTypes.STRING },
    created_by: { type: DataTypes.STRING },
    emp_cd: { type: DataTypes.STRING },
    emp_id: { type: DataTypes.STRING },
    emp_name: { type: DataTypes.STRING },
    fcm_token: { type: DataTypes.STRING },
    first_login: { type: DataTypes.STRING },
    ip_add: { type: DataTypes.STRING },
    ip_user: { type: DataTypes.STRING },
    last_pwd_changed: { type: DataTypes.STRING },
    last_updated_by: { type: DataTypes.STRING },
    no_off_session: { type: DataTypes.STRING },
    object_version_number: { type: DataTypes.STRING },
    otp: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    pwd_chang_days: { type: DataTypes.STRING },
    pwd_msg_bfr_day: { type: DataTypes.STRING },
    role_centre: { type: DataTypes.STRING },
    unit_cd: { type: DataTypes.STRING },
    updated_at: { type: DataTypes.STRING },
    user_fname: { type: DataTypes.STRING },
    user_from: { type: DataTypes.STRING },
    user_id: { type: DataTypes.INTEGER },
    user_master_id: { type: DataTypes.BIGINT, primaryKey: true },
    user_name: { type: DataTypes.STRING },
    valid_from: { type: DataTypes.STRING },
    valid_to: { type: DataTypes.STRING },
    validity: { type: DataTypes.STRING },
  },
  {
    tableName: "user_master",
    timestamps: true,
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);

User_Master.hasMany(User_Unit, {
  foreignKey: "user_master_id",
  sourceKey: "user_master_id",
  as: "userUnits",
});

User_Master.hasOne(Emp_Master_Hd, {
  foreignKey: "emp_number",
  sourceKey: "emp_id",
});

module.exports = User_Master;

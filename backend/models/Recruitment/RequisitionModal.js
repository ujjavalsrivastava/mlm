const sequelize = require("../../config/sequelize");
const Unit = require("./../Base/Unit");
const Department = require("./../Base/Department");
const EmpMaterHD = require("./../Employee/EmpMasterHd");
const RequisitionModal = sequelize.define(
  "requisition",

  {
    unit_cd: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    requisition_no: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    job_title: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    priorty_status: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    department: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    experiance: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    new_hired: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    back_fill: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    no_of_position: {
      type: "DataTypes.INTEGER",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    location: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    comments: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    min_rang: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    max_rang: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    job_type: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    target_hiring_date: {
      type: "DataTypes.DATE",
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
    // requisition_id: {
    //   type: "DataTypes.INTEGER",
    //   unique: false,
    //   allowNull: false,
    //   primaryKey: false,
    //   defaultValue: "nextval('terms.requisition_requisition_id_seq'::regclass)",
    //   autoIncrement: false,
    // },

    object_version_number: {
      type: "DataTypes.INTEGER",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    approval_by: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    approval_status: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    approval_date: {
      type: "DataTypes.DATE",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
  },
  {
    tableName: "requisition",
    timestamps: true,
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);

RequisitionModal.hasOne(Unit, {
  foreignKey: "code",
  sourceKey: "unit_cd",
  as: "Requisition",
});
RequisitionModal.hasOne(Department, {
  foreignKey: "code",
  sourceKey: "department",
  as: "deptDetails",
});
RequisitionModal.hasOne(EmpMaterHD, {
  foreignKey: "emp_number",
  sourceKey: "created_by",
  as: "EmpMaterHDDetals",
});

module.exports = RequisitionModal;

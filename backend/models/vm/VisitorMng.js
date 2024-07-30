const sequelize = require("../../config/sequelize");
const Unit = require("./../Base/Unit");
const EmpMasterHd = require("./../Employee/EmpMasterHd");

// @author Madhur
const VisitorMng = sequelize.define(
  "vm",
  {
    // unit_cd: {
    //   type: "DataTypes.STRING",
    //   unique: false,
    //   allowNull: false,
    //   primaryKey: false,
    //   defaultValue: null,
    //   autoIncrement: false,
    // },
    phone: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    visitpurpose: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    selfie: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    fullname: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    companyname: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    totalvisitors: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    abroad: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    vaccinated: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    belongings: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    aadhaar: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    pan: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    drivinglicense: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    visitedperson: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    signImg: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    approval: {
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
    checkout: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },

    checkount_date: {
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
  },
  {
    tableName: "vm",
    timestamps: true,
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);
VisitorMng.hasOne(EmpMasterHd, {
  foreignKey: "emp_number", // foreign key in EmpMasterHd referencing Assets
  sourceKey: "visitedperson", // source key in Assets
  as: "EmpMasterDetails", // alias for the association
});
// VisitorMng.hasOne(Unit, {
//   foreignKey: "code",
//   sourceKey: "unit_cd",
//   as: "unitMaster",
// });

// Assets.hasOne(EmpMasterHd, {
//   foreignKey: "emp_number",
//   sourceKey: "assign_to",
//   as: "EmpMasterDetails",
// });

module.exports = VisitorMng;

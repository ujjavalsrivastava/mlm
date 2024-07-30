const sequelize = require("../../config/sequelize");
const Unit = require("./Unit");
const EmpMasterHd = require("./../Employee/EmpMasterHd");

// @author Madhur
const SecControllValue = sequelize.define(
  "sec_control_values",
  {
    control_type: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: false,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    meaning: {
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
      allowNull: false,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    application_code: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: false,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    control_code: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: false,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },

    enabled_flag: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: false,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },

    display_sequence: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: false,
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
    tableName: "sec_control_values",
    timestamps: false,
    //updatedAt: "updated_at",
    //createdAt: "created_at",
  }
);
// Assets.hasOne(EmpMasterHd, {
//   foreignKey: "assign_to", // foreign key in EmpMasterHd referencing Assets
//   sourceKey: "emp_number", // source key in Assets
//   as: "EmpMasterDetails", // alias for the association
// });
// Assets.hasOne(Unit, {
//   foreignKey: "code",
//   sourceKey: "unit_cd",
//   as: "unitMaster",
// });

// Assets.hasOne(EmpMasterHd, {
//   foreignKey: "emp_number",
//   sourceKey: "assign_to",
//   as: "EmpMasterDetails",
// });

SecControllValue.removeAttribute("id");
module.exports = SecControllValue;

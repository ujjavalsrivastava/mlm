const sequelize = require("../../config/sequelize");
const Unit = require("./Unit");
const EmpMasterHd = require("./../Employee/EmpMasterHd");

// @author Madhur
const Assets = sequelize.define(
  "asset_list",
  {
    unit_cd: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: false,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    ass_cat_type_id: {
      type: "DataTypes.INTEGER",
      unique: false,
      allowNull: false,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    asset_name: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    asset_to: {
      type: "DataTypes.STRING",
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
    condition: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    status: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    acknow_status: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    assign_to: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    warr_exp_status: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    warr_exp_on: {
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
  },
  {
    tableName: "asset_list",
    timestamps: true,
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);
// Assets.hasOne(EmpMasterHd, {
//   foreignKey: "assign_to", // foreign key in EmpMasterHd referencing Assets
//   sourceKey: "emp_number", // source key in Assets
//   as: "EmpMasterDetails", // alias for the association
// });
Assets.hasOne(Unit, {
  foreignKey: "code",
  sourceKey: "unit_cd",
  as: "unitMaster",
});

// Assets.hasOne(EmpMasterHd, {
//   foreignKey: "emp_number",
//   sourceKey: "assign_to",
//   as: "EmpMasterDetails",
// });

module.exports = Assets;

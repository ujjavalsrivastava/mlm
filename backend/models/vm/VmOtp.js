const sequelize = require("../../config/sequelize");

// @author Madhur
const Vm_Otp = sequelize.define(
  "vm_otp",
  {
    otp: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    mobile_no: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: false,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
  },
  {
    tableName: "vm_otp",
    timestamps: true,
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);

module.exports = Vm_Otp;

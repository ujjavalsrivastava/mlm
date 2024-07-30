const sequelize = require("../../config/sequelize");
const Department = require("../Base/Department");

// @author Madhur
const Jd_Templates = sequelize.define(
  "jd_templates",
  {
    id: {
      type: "DataTypes.INTEGER",
      unique: false,
      allowNull: false,
      primaryKey: true,
      defaultValue: null,
      autoIncrement: true,
    },
    jd_title: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: false,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    template_type: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    dept_code: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: false,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
    jd_description: {
      type: "DataTypes.UNKNOWN",
      unique: false,
      allowNull: false,
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
    updated_by: {
      type: "DataTypes.STRING",
      unique: false,
      allowNull: true,
      primaryKey: false,
      defaultValue: null,
      autoIncrement: false,
    },
  },
  {
    tableName: "jd_templates",
    timestamps: true,
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);

Jd_Templates.hasOne(Department, {
  foreignKey: "code",
  sourceKey: "dept_code",
  as: "jdTemplates",
});

module.exports = Jd_Templates;

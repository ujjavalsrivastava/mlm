const sequelize = require("../../config/sequelize");
// This Controller Use For ExpenceAdvanceReq
const ExpenceCategory = sequelize.define(
    "exp_category",
    {
        exp_category: {
            type: "DataTypes.STRING",
            unique: false,
            allowNull: true,
            primaryKey: false,
            defaultValue: null,
            autoIncrement: false,
        },
        usage_type: {
            type: "DataTypes.STRING",
            unique: false,
            allowNull: true,
            primaryKey: false,
            defaultValue: null,
            autoIncrement: false,
        },
        exp_code: {
            type: "DataTypes.STRING",
            unique: false,
            allowNull: true,
            primaryKey: false,
            defaultValue: null,
            autoIncrement: false,
        },
        policy_using: {
            type: "DataTypes.STRING",
            unique: false,
            allowNull: true,
            primaryKey: false,
            defaultValue: null,
            autoIncrement: false,
        },
       
    },
    {
        tableName: "exp_category",
        timestamps: true,
        updatedAt: "updated_at",
        createdAt: "created_at",
    }
);
module.exports = ExpenceCategory;
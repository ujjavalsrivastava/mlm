const sequelize = require("../../config/sequelize");
// This Controller Use For ExpenceAdvanceReq
const ExpenceAdvanceReq = sequelize.define(
    "exp_adv_req",
    {
        adv_amount: {
            type: "DataTypes.STRING",
            unique: false,
            allowNull: true,
            primaryKey: false,
            defaultValue: null,
            autoIncrement: false,
        },
        purpose: {
            type: "DataTypes.STRING",
            unique: false,
            allowNull: true,
            primaryKey: false,
            defaultValue: null,
            autoIncrement: false,
        },
        required_date: {
            type: "DataTypes.STRING",
            unique: false,
            allowNull: true,
            primaryKey: false,
            defaultValue: null,
            autoIncrement: false,
        },
        atachment: {
            type: "DataTypes.STRING",
            unique: false,
            allowNull: true,
            primaryKey: false,
            defaultValue: null,
            autoIncrement: false,
        },
       
    },
    {
        tableName: "exp_adv_req",
        timestamps: true,
        updatedAt: "updated_at",
        createdAt: "created_at",
    }
);
module.exports = ExpenceAdvanceReq;

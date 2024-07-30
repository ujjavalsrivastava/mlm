const sequelize = require("../../config/sequelize");
const UserPrivilege = sequelize.define(
    "user_priv",
    {
        created_at:{
            type: "DataTypes.DATE",
            unique: false,
            allowNull: true,
            primaryKey: false,
            defaultValue: null,
            autoIncrement: false,
        },
        created_by:{
            type: "DataTypes.STRING",
            unique: false,
            allowNull: true,
            primaryKey: false,
            defaultValue: null,
            autoIncrement: false,
        },
        file_id:{
            type: "DataTypes.STRING",
            unique: false,
            allowNull: false,
            primaryKey: false,
            defaultValue: null,
            autoIncrement: false, 
        },
        file_type:{
            type: "DataTypes.STRING",
            unique: false,
            allowNull: true,
            primaryKey: false,
            defaultValue: null,
            autoIncrement: false,
        },
        previlege:{
            type: "DataTypes.STRING",
            unique: false,
            allowNull: false,
            primaryKey: false,
            defaultValue: null,
            autoIncrement: false,
        },
        fr_dt:{
            type: "DataTypes.DATE",
            unique: false,
            allowNull: false,
            primaryKey: false,
            defaultValue: null,
            autoIncrement: false, 
        },
        to_dt:{
            type: "DataTypes.DATE",
            unique: false,
            allowNull: true,
            primaryKey: false,
            defaultValue: null,
            autoIncrement: false, 
        },
        user_id:{
            type: "DataTypes.STRING",
            unique: false,
            allowNull: false,
            primaryKey: false,
            defaultValue: null,
            autoIncrement: false,
        }
    },
    {
        tableName: "user_priv",
        timestamps: true,
        updatedAt: "updated_at",
        createdAt: "created_at",
      }
)
UserPrivilege.removeAttribute("id");

module.exports = UserPrivilege;
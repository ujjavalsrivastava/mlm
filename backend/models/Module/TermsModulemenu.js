const sequelize = require("../../config/sequelize");

const TermsModulemenu = sequelize.define(
    "terms_module",
    {
        file_menu_id:{
            type: "DataTypes.STRING",
            unique: false,
            allowNull: true,
            primaryKey: false,
            defaultValue: "NULL::character varying",
            autoIncrement: false,
        },
        file_sname:{
            type: "DataTypes.STRING",
            unique: false,
            allowNull: true,
            primaryKey: false,
            defaultValue: "NULL::character varying",
            autoIncrement: false,
        },
        menu_id:{
            type: "DataTypes.STRING",
            unique: false,
            allowNull: true,
            primaryKey: false,
            defaultValue: "NULL::character varying",
            autoIncrement: false,
        },
        mod_id:{
            type: "DataTypes.INTEGER",
            unique: false,
            allowNull: false,
            primaryKey: false,
            defaultValue: "nextval('terms.terms_module_mod_id_seq'::regclass)",
            autoIncrement: false,
        },
        modl:{
            type: "DataTypes.STRING",
            unique: false,
            allowNull: true,
            primaryKey: false,
            defaultValue: "NULL::bpchar",
            autoIncrement: false,
        },
        module_image_path:{
            type: "DataTypes.STRING",
            unique: false,
            allowNull: true,
            primaryKey: false,
            defaultValue: "NULL::character varying",
            autoIncrement: false,
        },
        show_flag:{
            type: "DataTypes.STRING",
            unique: false,
            allowNull: true,
            primaryKey: false,
            defaultValue: "NULL::character varying",
            autoIncrement: false,
        },
        slno:{
            type: "DataTypes.FLOAT",
            unique: false,
            allowNull: true,
            primaryKey: false,
            defaultValue: false,
            autoIncrement: false,
        }
    },
    {
        tableName: "terms_module",
        timestamps: false,
        // updatedAt: "updated_at",
        // createdAt: "created_at",
      }
)



TermsModulemenu.removeAttribute("id");


module.exports = TermsModulemenu;
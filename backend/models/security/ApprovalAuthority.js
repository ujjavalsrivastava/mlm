const sequelize = require("../../config/sequelize");

const Department = require("../Base/Department");
const SecControllValue = require("../Base/SecControllValue");
const Unit = require("../Base/Unit");
const EmpMasterHd = require("../Employee/EmpMasterHd");
const FileMasterErp = require("./FileMasterErp");

const ApprovalAuthorityModal = sequelize.define(
    "approval_authority",
    {
        unit_cd: {
            type: "DataTypes.STRING",
            unique: false,
            allowNull: true,
            primaryKey: false,
            defaultValue: null,
            autoIncrement: false,
        },
        emp_cd: {
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
        form: {
            type: "DataTypes.STRING",
            unique: false,
            allowNull: true,
            primaryKey: false,
            defaultValue: null,
            autoIncrement: false,
        },
        autho_level: {
            type: "DataTypes.STRING",
            unique: false,
            allowNull: true,
            primaryKey: false,
            defaultValue: null,
            autoIncrement: false,
        },
    },
    {
        tableName: "approval_authority",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

ApprovalAuthorityModal.hasOne(Department, {
    foreignKey: "code",
    sourceKey: "department",
    as: "DepartmentName",
});
ApprovalAuthorityModal.hasOne(Unit, {
    foreignKey: "code",
    sourceKey: "unit_cd",
    as: "UnitName",
});
ApprovalAuthorityModal.hasOne(EmpMasterHd, {
    foreignKey: "emp_number",
    sourceKey: "emp_cd",
    as: "EmpName",
});
ApprovalAuthorityModal.hasOne(FileMasterErp, {
    foreignKey: "file_id",
    sourceKey: "form",
    as: "FormName",
});
ApprovalAuthorityModal.hasOne(SecControllValue, {
    foreignKey: "control_code",
    sourceKey: "autho_level",
    as: "AuthoLevelName",
});

module.exports = ApprovalAuthorityModal;
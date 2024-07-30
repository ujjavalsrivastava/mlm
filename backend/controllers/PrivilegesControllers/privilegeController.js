const { Op } = require("sequelize");
const TermsModulemenu = require("../../models/Module/TermsModulemenu");
const { Response } = require("../../utils/common/response");
const UserPrivilege = require("../../models/Userprevilege/UserPrivilege");
const FileMasterErp = require("../../models/security/FileMasterErp");

/**
 * Retrieves the module details for a given user ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<Object>} - A promise that resolves to the module details or an error message.
 * @author Madhur
 */
const usersModules = async (req, res) => {
  try {
    const { userId } = req.body;

    const userModules = await UserPrivilege.findAll({
      attributes: ["modl"],
      where: {
        user_id: userId,
      },
      group: ["modl"],
    });

    const arrayValues = [];
    for (const findPriv of userModules) {
      // console.log(findPriv.dataValues.modl);
      // return false

      arrayValues.push(findPriv.dataValues.modl);
    }

    // console.log(arrayValues);

    const moduleDetails = await TermsModulemenu.findAll({
      where: {
        modl: {
          [Op.in]: arrayValues,
        },
      },
    });

    return Response(res, "success", "Module Details", moduleDetails);
  } catch (error) {
    return Response(res, "error", error.message);
  }
};

/**
 * Retrieves the menu items for a given user and module, based on their privileges.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.body - The request body.
 * @param {string} req.body.userId - The ID of the user.
 * @param {string} req.body.module - The module for which to retrieve menu items.
 * @param {Object} res - The response object.
 * @return {Promise<Object>} A promise that resolves to the menu items or an error message.
 * @author Madhur
 */
const menuPrivilege = async (req, res) => {
  try {
    const { userId, module } = req.body;

    // Fetch user privileges
    const userPrivileges = await UserPrivilege.findAll({
      attributes: ['file_id'],
      where: {
        user_id: userId,
        modl: module
      }
    });

    // Extract file IDs from user privileges
    const fileIds = userPrivileges.map(priv => priv.file_id);

    // Fetch file master ERP records
    const fileMasterErpRecords = await FileMasterErp.findAll({
      where: {
        file_id: {
          [Op.in]: fileIds
        }
      },
      attributes: [
        'file_id',
        'file_name',
        'file_type',
        'file_menu_id',
        'icon',
        'flow_path',
      ],
      order: [['file_menu_id', 'DESC']],
    });

    // Prepare the menu data
    const menuMap = new Map();
    fileMasterErpRecords.forEach(item => {
      menuMap.set(item.file_id, { ...item.dataValues, children: [] });
    });

    const menuData = [];
    fileMasterErpRecords.forEach(item => {
      const { file_id, file_menu_id } = item;
      if (file_menu_id !== '0') {
        const parent = menuMap.get(file_menu_id);
        if (parent) {
          parent.children.push(menuMap.get(file_id));
        }
      } else {
        menuData.push(menuMap.get(file_id));
      }
    });

    // Send response
    return Response(res, 'success', 'Menu Items', menuData);
  } catch (error) {
    return Response(res, 'error', error.message, null);
  }
};

module.exports = { usersModules, menuPrivilege };

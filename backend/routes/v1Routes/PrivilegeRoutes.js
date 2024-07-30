const express = require("express");
const { usersModules, menuPrivilege } = require("../../controllers/PrivilegesControllers/privilegeController");

const router = express.Router();

router.post("/usersModules", usersModules);
router.post("/menuPrivilege", menuPrivilege);

module.exports = router;

const express = require("express");
const {
  getDepartments,
  getEmpMasterList,
  unitList,
  yearList,
  FileMasterErpList,
 
} = require("../../../controllers/BaseControllers/departmentController");
const {
  jobTypes,
  currencies,
  recruiters,
  hiringManagers,
  sendDemoEmail,
  getMenuoptionModule
} = require("../../../controllers/BaseControllers/commonController");
const router = express.Router();

router.get("/getDepartments", getDepartments);
router.get("/getEmpMasterList", getEmpMasterList);
router.get("/getFileMasterErpList", FileMasterErpList);
router.get("/unitList", unitList);
router.get("/yearList", yearList);
router.get("/jobTypes", jobTypes);
router.get("/currencies", currencies);
router.get("/recruiters", recruiters);
router.get("/hiringManagers", hiringManagers);
router.get("/send-demo-email", sendDemoEmail);
 router.get("/get_module_menu", getMenuoptionModule);
module.exports = router;

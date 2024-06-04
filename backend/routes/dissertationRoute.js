const express = require("express");
const router = express.Router();
// const {
//   registerGuide,
//   loginGuide,
//   getAllGuides,
//   getGuide,
//   updateGuide,
//   deleteGuide,
// } = require("../controllers/guideController.js");
const adminCheck = require("../middleware/admincheck.js");
const {
  addDisertation,
  getDissertation,
  getAllDissertation,
} = require("../controllers/dissertationController.js");

router.post("/add", addDisertation);
router.get("/get", getDissertation);
router.get("/getAll", getAllDissertation);
// router.get("/getAll", getAllGuides);
// router.get("/get/:id", getGuide);
// router.put("/update/:id", updateGuide);
// router.delete("/delete/:id", deleteGuide);

module.exports = router;

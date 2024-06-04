const express = require("express");
const router = express.Router();
const {
  registerGuide,
  loginGuide,
  getAllGuides,
  getGuide,
  updateGuide,
  deleteGuide,
} = require("../controllers/guideController.js");
const adminCheck = require("../middleware/admincheck.js");




router.post("/register", registerGuide);
router.post("/login", loginGuide);
router.get("/getAll", getAllGuides);
router.get("/get/:id", getGuide);
router.put("/update/:id", updateGuide);
router.delete("/delete/:id", deleteGuide);


module.exports = router;

const express = require("express");
const {
  registerStudent,
  loginStudent,
  getAllStudent,
  getStudent,
  updateStudent,
  delStudent,
} = require("../controllers/studentController.js");
const adminCheck = require("../middleware/admincheck.js");

const router = express.Router();

router.post("/register", registerStudent);
router.post("/login", loginStudent);
router.get("/getAll", getAllStudent);
router.get("/get/:id", getStudent);
router.put("/update/:id", updateStudent);
router.delete("/delete/:id", delStudent);

// // get user
// router.get("/getUser", getAllUser);
// router.get("/getUser/:id", getUser);
// router.put("/updUser/:id", updateUser);
// router.get("/delAll", delAll);
// // router.get("/deactivateUser/:id", deactiveUser);
// router.delete("/delUser/:id", delUser);

module.exports = router;

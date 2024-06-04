const express = require("express");
const {
  submitIdea,
  getIdea,
  getAllIdea,
  getStudentIdea,
  //   loginStudent,
  //   getAllStudent,
  //   getStudent,
  //   updateStudent,
  //   delStudent,
} = require("../controllers/IdeaController.js");
const adminCheck = require("../middleware/admincheck.js");
const { getStudent } = require("../controllers/studentController.js");

const router = express.Router();

router.post("/submitIdea", submitIdea);
router.get("/getIdea/:id", getIdea);
router.get("/getIdea", getAllIdea);
router.get("/getIdea", getStudentIdea);
// router.post("/getIdea", getIdea);
// router.post("/getIdea", getIdea);
// router.post("/loginStudent", loginStudent);
// router.get("/getStudent", getAllStudent);
// router.get("/getStudent/:id", getStudent);
// router.put("/updStudent/:id", updateStudent);
// router.delete("/delStudent/:id", delStudent);

// // get user
// router.get("/getUser", getAllUser);
// router.get("/getUser/:id", getUser);
// router.put("/updUser/:id", updateUser);
// router.get("/delAll", delAll);
// // router.get("/deactivateUser/:id", deactiveUser);
// router.delete("/delUser/:id", delUser);

module.exports = router;

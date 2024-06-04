const express = require("express");
const router = express.Router();
const {
    registerAdmin,
    loginAdmin,
    getAllAdmins,
    getAdmin,
    updateAdmin,
    deleteAdmin,
} = require("../controllers/adminController.js");
const adminCheck = require("../middleware/admincheck.js");




router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/getAll", getAllAdmins);
router.get("/get/:id", getAdmin);
router.put("/update/:id", updateAdmin);
router.delete("/delete/:id", deleteAdmin);


module.exports = router;

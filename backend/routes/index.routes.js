const { Router } = require("express");
const authRoutes = require("./userRoutes");
const ideaSubmissionRoute = require("./ideaSubmissionRoute");
const studentRoutes = require("./studentRoutes");
const guideRoutes = require("./guideRoutes");
const adminRoutes = require("./adminRoutes");
const dissertationRoute = require("./dissertationRoute");

const router = Router();

router.use("/users", authRoutes);
router.use("/student", studentRoutes);
router.use("/guide", guideRoutes);
router.use("/admin", adminRoutes);
router.use("/idea", ideaSubmissionRoute);
router.use("/dissertation", dissertationRoute);

module.exports = router;

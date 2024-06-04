const Student = require("../models/studentModel.js");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const registerStudent = asyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Student.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new Student({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).send("User created successfully!!");
    console.log("User created successfully");
  } catch (error) {
    console.error(error);
    res.status(400).send("Error creating user");
  }
});
const loginStudent = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  // Check for Email
  const user = await Student.findOne({ email });
  // console.log(user);

  if (user && (await bcrypt.compare(password, user.password))) {
    if (role == user.role) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        role: user.role, // Include user role in the response
        token: generateToken(user.id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid Role");
    }
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});
const getAllStudent = asyncHandler(async (req, res) => {
  try {
    const student = await Student.find();
    if (student.length === 0) {
      throw new Error("User not found", 400);
    } else {
      res.status(200).json(student);
    }
  } catch (error) {
    next(error);
  }
});
const getStudent = asyncHandler(async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      throw new Error("Student not found", 400);
    } else {
      res.status(200).json(student);
    }
  } catch (error) {
    next(error);
  }
});
const updateStudent = asyncHandler(async (req, res) => {
  // const { user } = req;
  try {
    // Get product id
    const studentId = req.params.id;

    const updateStudent = await Student.findByIdAndUpdate(
      studentId,
      { $set: req.body },
      { new: true } // Return modified document
    );

    if (updateStudent) {
      res.status(200).json({
        success: true,
        message: "Student Details Updated Successfully",
        data: updateStudent,
      });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Student details not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message || "Internal Server Error",
    });
  }
});
const delStudent = asyncHandler(async (req, res) => {
  // const { user } = req;
  try {
    const student = await Student.findById(req.params.id);
    if (!student) throw new Error("Student not found", 400);
    try {
      await Student.findByIdAndDelete(req.params.id);
      res.status(200).json("Student Removed Sucessfully!!");
    } catch (error) {
      throw new Error("Student not found", 400);
    }
  } catch (error) {
    throw new CustomError("OOps error occured", 500);
  }
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerStudent,
  loginStudent,
  getAllStudent,
  getStudent,
  updateStudent,
  delStudent,
};

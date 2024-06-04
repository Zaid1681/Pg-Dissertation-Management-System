const Admin = require("../models/adminModel.js");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();


const registerAdmin = asyncHandler(async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      throw new Error("Admin already exists");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newAdmin = new Admin({ ...req.body, password: hash });

    await newAdmin.save();
    res.status(200).send("Admin created successfully!!");
    console.log("Admin created successfully");
  } catch (error) {
    console.error(error);
    res.status(400).send("Error creating user");
  }
});


const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  // Check for Email
  const user = await Admin.findOne({ email });
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


const getAllAdmins = asyncHandler(async (req, res) => {
  try {
    const admin = await Admin.find();
    if (admin.length === 0) {
      throw new Error("No Admins in the system", 400);
    } else {
      res.status(200).json(admin);
    }
  } catch (error) {
    next(error);
  }
});


const getAdmin = asyncHandler(async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) {
      throw new Error("Admin not found", 400);
    } else {
      res.status(200).json(admin);
    }
  } catch (error) {
    next(error);
  }
});


const updateAdmin = asyncHandler(async (req, res) => {
  // const { user } = req;
  try {
    // Get id
    const adminId = req.params.id;

    const updateAdmin = await Admin.findByIdAndUpdate(
      adminId,
      { $set: req.body },
      { new: true } // Return modified document
    );

    if (updateAdmin) {
      res.status(200).json({
        success: true,
        message: "Admin Details Updated Successfully",
        data: updateAdmin,
      });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Admin details not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message || "Internal Server Error",
    });
  }
});


const deleteAdmin = asyncHandler(async (req, res) => {
  // const { user } = req;
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) throw new Error("Admin not found", 400);
    try {
      await Admin.findByIdAndDelete(req.params.id);
      res.status(200).json("Admin Removed Sucessfully!!");
    } catch (error) {
      throw new Error("Admin not found", 400);
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
  registerAdmin,
  loginAdmin,
  getAllAdmins,
  getAdmin,
  updateAdmin,
  deleteAdmin,
};
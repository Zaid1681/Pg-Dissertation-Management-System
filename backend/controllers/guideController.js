const Guide = require("../models/guideModel.js");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();


const registerGuide = asyncHandler(async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existingGuide = await Guide.findOne({ email });
    if (existingGuide) {
      throw new Error("Guide already exists");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newGuide = new Guide({ ...req.body, password: hash });

    await newGuide.save();
    res.status(200).send("Guide created successfully!!");
    console.log("Guide created successfully");
  } catch (error) {
    console.error(error);
    res.status(400).send("Error creating user");
  }
});


const loginGuide = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  // Check for Email
  const user = await Guide.findOne({ email });
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


const getAllGuides = asyncHandler(async (req, res) => {
  try {
    const guide = await Guide.find();
    if (guide.length === 0) {
      throw new Error("No Guides in the system", 400);
    } else {
      res.status(200).json(guide);
    }
  } catch (error) {
    next(error);
  }
});


const getGuide = asyncHandler(async (req, res) => {
  try {
    const guide = await Guide.findById(req.params.id);
    if (!guide) {
      throw new Error("Guide not found", 400);
    } else {
      res.status(200).json(guide);
    }
  } catch (error) {
    next(error);
  }
});


const updateGuide = asyncHandler(async (req, res) => {
  // const { user } = req;
  try {
    // Get product id
    const guideId = req.params.id;

    const updateGuide = await Guide.findByIdAndUpdate(
      guideId,
      { $set: req.body },
      { new: true } // Return modified document
    );

    if (updateGuide) {
      res.status(200).json({
        success: true,
        message: "Guide Details Updated Successfully",
        data: updateGuide,
      });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Guide details not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message || "Internal Server Error",
    });
  }
});


const deleteGuide = asyncHandler(async (req, res) => {
  // const { user } = req;
  try {
    const guide = await Guide.findById(req.params.id);
    if (!guide) throw new Error("Guide not found", 400);
    try {
      await Guide.findByIdAndDelete(req.params.id);
      res.status(200).json("Guide Removed Sucessfully!!");
    } catch (error) {
      throw new Error("Guide not found", 400);
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
  registerGuide,
  loginGuide,
  getAllGuides,
  getGuide,
  updateGuide,
  deleteGuide,
};
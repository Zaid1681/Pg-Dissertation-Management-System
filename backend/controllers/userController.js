const asyncHandler = require("express-async-handler");
//const Goal = require("../models/goalModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// @desc Register User
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User with role-specific details
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role, // Set the user's role
    ...(role === "Student"),
    ...(role === "Guide"),
    ...(role === "Admin"),
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

// @desc Authenticate a User
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  // Check for Email
  const user = await User.findOne({ email });
  console.log(user);

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

// @desc Get User data
// @route POST /api/users/me
// @access Private
const getMe = asyncHandler(async (req, res) => {
  //const { _id, name, email } = await User.findById(req.user.id)

  res.status(200).json(req.user);
});

// Generate JWT

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};

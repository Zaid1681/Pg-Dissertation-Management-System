const mongoose = require("mongoose");
const AuthRoles = require("../utils/authRoles.js");

const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [50, "Name should not exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      ref: "User",
      unique: true,
    },
    password: {
      type: String,
      ref: "User",
      required: [true, "Password is required"],
      minlength: [8, "Password should be at least 8 characters long"],
    },
    role: {
      type: String,
      ref: "User",
      default: "",
    },
    college: {
      type: String,
    },
    university: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;

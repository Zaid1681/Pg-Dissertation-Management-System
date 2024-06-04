const mongoose = require("mongoose");
const AuthRoles = require("../utils/authRoles.js");

const guideSchema = mongoose.Schema(
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
    },
    // qualifications: [
    //   {
    //     degree: {
    //       type: String,
    //     },
    //     collegeName: {
    //       type: String,
    //     },
    //     cgpi: {
    //       type: Number,
    //     },
    //   },
    // ],
    qualification:{
      type:String,
    },
    expertise: {
      type: String,
    },
    achievements: {
      type: String,
    },
    experience: {
      type: String,
    },
    image: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Guide = mongoose.model("Guide", guideSchema);

module.exports = Guide;

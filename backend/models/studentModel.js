const mongoose = require("mongoose");
const AuthRoles = require("../utils/authRoles.js");

const studentSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
    name: {
      type: String,
      required: [true, "First Name is required"],
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
      enum: Object.values(AuthRoles),
      Required: true,
      default: AuthRoles.student,
    },
    about: {
      type: String,
      default: "",
    },
    college: {
      type: String,
      // required: true,
    },
    currentYear: {
      type: String,
      default: "",
    },
    currentSem:{
      type: String,
    },
    // fieldOfInterest: {
    //   type: [String],
    //   default: [],
    // },
    department: {
      type: String,
      // required: true,
      default: "",
    },
    university: {
      type: String,
      // required: true,
      default: "",
    },
    image: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    guide: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guide",
      default: null,
    },
    goal: {
      type: String,
      default: "",
    },
    dissertation: {
      status: {
        type: Boolean,
        default: false,
      },
      dissertationId: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

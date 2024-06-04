const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      // ref: "Student",
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      ref: "Student",
      unique: true,
    },
    password: {
      type: String,
      ref: "Student",
      required: [true, "Please add a password"],
    },
    role: {
      type: String,
      enum: ["Student", "Guide", "Admin"],
      ref: "Student",
      default: "Student",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

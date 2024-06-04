const mongoose = require("mongoose");

const DissertationModal = mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    studentname: {
      type: String,
      ref: "Student",
      required: true,
    },
    // Researcher is nothing but the student name
    researcher: {
      type: String,
      required: [true, "Researcher Name is required to form a group"],
      trim: true,
      maxlength: [50, "Researcher Name should not exceed 50 characters"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      maxlength: [100, "Name should not exceed 100 characters"],
    },
    description: {
      type: String,
      // required: [true, "Description is required"],
    },
    keyword: {
      type: [String],
      default: [],
    },
    department: {
      type: String,
      required: true,
      default: "",
    },
    university: {
      type: String,
      required: true,
      default: "",
    },
    // college: {
    //   type: String,
    //   required: true,
    //   default: "",
    // },
    // guide: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Guide",
    //   default: null,
    // },
  },
  {
    timestamps: true,
  }
);

const Dissertation = mongoose.model("Dissertation", DissertationModal);

module.exports = Dissertation;

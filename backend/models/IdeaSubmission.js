const mongoose = require("mongoose");
const IdeaSubmissionStatus = require("../utils/IdeaSubmissionStatus.js");

const IdeaSubmissionSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    studentname: {
      type: String,
      required: [true, "Student Name is required to form a group"],
      trim: true,
      maxlength: [50, "Name should not exceed 50 characters"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      maxlength: [100, "Name should not exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    status: {
      type: String,
      enum: Object.values(IdeaSubmissionStatus),
      default: IdeaSubmissionStatus.ongoing,
    },
    guideDomain: {
      type: String,
      required: [true, "Domain is required"],
    },
    guideName: {
      type: String,
      ref: "Guide",
      required: true,
    },
    semester: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    subMissionDate: {
      type: Date,
      default: "",
    },
    fieldOfInterest: {
      type: String,
      default: "",
    },
    // department: {
    //   type: String,
    //   required: true,
    //   default: "",
    // },
    // university: {
    //   type: String,
    //   default: "",
    // },
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

    // dissertation: {
    //   status: {
    //     type: Boolean,
    //     default: false,
    //   },
    //   dissertationId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Group",
    //     default: null,
    //   },
    // },
  },
  {
    timestamps: true,
  }
);

const IdeaSubmission = mongoose.model("IdeaSubmission", IdeaSubmissionSchema);

module.exports = IdeaSubmission;

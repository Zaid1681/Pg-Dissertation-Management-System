const IdeaSubmission = require("../models/IdeaSubmission.js");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
// const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const submitIdea = asyncHandler(async (req, res, next) => {
  try {
    const { emastudentId, title } = req.body;
    const existingIdea = await IdeaSubmission.findOne({ emastudentId, title });
    if (existingIdea) {
      throw new Error("You have Alreday Submitted Idea on this title");
    }

    const newIdea = new IdeaSubmission({ ...req.body });

    await newIdea.save();
    res.status(200).send("Project Idea Submission Succesfull");
    console.log("Project Idea Submission Succesfull");
  } catch (error) {
    console.error(error);
    res.status(400).send("Error Submission Idea");
  }
});
const getIdea = asyncHandler(async (req, res) => {
  try {
    const ideaDetails = await IdeaSubmission.find({ studentId: req.params.id });
    if (!ideaDetails) {
      throw new Error("Idea Details not found", 400);
    } else {
      res.status(200).json(ideaDetails);
    }
  } catch (error) {
    next(error);
  }
});

// this will be usefull
const getStudentIdea = asyncHandler(async (req, res) => {
  try {
    const { stdID } = req.query;
    const ideaDetails = await IdeaSubmission.find({
      studentId: stdID,
    });
    if (!ideaDetails) {
      throw new Error("Student Idea's Details not found", 400);
    } else {
      res.status(200).json(ideaDetails);
    }
  } catch (error) {
    next(error);
  }
});

const getAllIdea = asyncHandler(async (req, res) => {
  try {
    const allIdea = await IdeaSubmission.find();
    if (allIdea.length === 0) {
      throw new Error("Idea is not present not found", 400);
    } else {
      res.status(200).json(allIdea);
    }
  } catch (error) {
    next(error);
  }
});

// const updateIdea = asyncHandler(async (req, res) => {
//   // const { user } = req;
//   try {
//     // Get product id
//     const studentId = req.params.id;

//     const updateStudent = await Student.findByIdAndUpdate(
//       studentId,
//       { $set: req.body },
//       { new: true } // Return modified document
//     );

//     if (updateStudent) {
//       res.status(200).json({
//         success: true,
//         message: "Student Details Updated Successfully",
//         data: updateStudent,
//       });
//     } else {
//       res
//         .status(404)
//         .json({ success: false, message: "Student details not found" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       error: error.message || "Internal Server Error",
//     });
//   }
// });
// const delStudent = asyncHandler(async (req, res) => {
//   // const { user } = req;
//   try {
//     const student = await Student.findById(req.params.id);
//     if (!student) throw new Error("Student not found", 400);
//     try {
//       await Student.findByIdAndDelete(req.params.id);
//       res.status(200).json("Student Removed Sucessfully!!");
//     } catch (error) {
//       throw new Error("Student not found", 400);
//     }
//   } catch (error) {
//     throw new CustomError("OOps error occured", 500);
//   }
// });

// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: "30d",
//   });
// };

module.exports = {
  submitIdea,
  getIdea,
  getAllIdea,
  getStudentIdea,
  //   loginStudent,
  //   getAllStudent,
  //   getStudent,
  //   updateStudent,
  //   delStudent,
};

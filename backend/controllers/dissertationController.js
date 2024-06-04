const Dissertation = require("../models/dissertationModal");
const asyncHandler = require("express-async-handler");
const dotenv = require("dotenv");

dotenv.config();

const addDisertation = asyncHandler(async (req, res, next) => {
  try {
    // const data = ({
    //   studentId,
    //   studentname,
    //   title,
    //   description,
    //   university,
    //   college,
    //   guideDomain,
    //   guide,
    //   keyword,
    // } = req.body);
    // const existingIdea = await Dissertation.findOne({
    //   studentId,
    //   studentname,
    //   title,
    //   description,
    //   university,
    //   college,
    //   guideDomain,
    //   guide,
    //   keyword,
    // });
    // if (existingIdea) {
    //   throw new Error("You have Alreday Submitted Idea on this title");
    // }

    const newDissertation = new Dissertation({ ...req.body });
    //
    await newDissertation.save();
    res.status(200).send("Dissertation Submitted Sucessfully Succesfull");
    console.log("Dissertation Submitted Sucessfully Succesfull");
  } catch (error) {
    console.error(error);
    res.status(400).send("Error Submission Dissertation");
  }
});
const getDissertation = asyncHandler(async (req, res) => {
  const { title } = req.query;

  try {
    const regex = new RegExp(title, "i"); // 'i' for case-insensitive search
    const matchedDocuments = await Dissertation.find({ title: regex }).exec();

    if (matchedDocuments.length > 0) {
      console.log("Matched documents:");
      console.log(matchedDocuments);
      res.status(200).send(matchedDocuments);
    } else {
      console.log(
        "No documents found with the specified keyword in the title."
      );
    }
  } catch (error) {
    console.error("Error finding documents:", error);
  }
});

// this will be usefull
// const getStudentIdea = asyncHandler(async (req, res) => {
//   try {
//     const { stdID } = req.query;
//     const ideaDetails = await IdeaSubmission.find({
//       studentId: stdID,
//     });
//     if (!ideaDetails) {
//       throw new Error("Student Idea's Details not found", 400);
//     } else {
//       res.status(200).json(ideaDetails);
//     }
//   } catch (error) {
//     next(error);
//   }
// });

const getAllDissertation = asyncHandler(async (req, res) => {
  try {
    const allDissertation = await Dissertation.find();
    if (allDissertation.length === 0) {
      throw new Error("Dissertation is not present not found", 400);
    } else {
      res.status(200).json(allDissertation);
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
  addDisertation,
  getDissertation,
  getAllDissertation,
  // getIdea,
  // getAllIdea,
  // getStudentIdea,
  //   loginStudent,
  //   getAllStudent,
  //   getStudent,
  //   updateStudent,
  //   delStudent,
};

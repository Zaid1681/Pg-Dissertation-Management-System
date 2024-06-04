const asyncHandler = require("express-async-handler");

const adminCheck = asyncHandler(async (req, res, next) => {
  try {
    next();
  } catch (error) {
    console.log("Error", error);
  }
});

module.exports = { adminCheck };

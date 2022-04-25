const User = require("../model/User");
const { uuid } = require("uuidv4");
// const jwt = require("jsonwebtoken");
// const { errorHandler } = require("../../../utils/index");

const createUserDB = async (req, res) => {
  try {
    const { email, firstName, lastName } = req.body;

    // Creating a New User Object;
    let newUser = new User({
      userId: uuid(),
      email: email,
      firstName: firstName,
      lastName: lastName,
      claimHistory: [],
    });

    // Use .save() to save new user object to DB
    let savedUser = await newUser.save();

    res.status(200).json({
      message: "New user has been created",
      payload: savedUser,
    });
    // res.redirect("/login-form");
  } catch (error) {
    res.status(500).json({
      message: "Create User Error",
      error: "error.message",
    });
  }
};

module.exports = {
  createUserDB,
};

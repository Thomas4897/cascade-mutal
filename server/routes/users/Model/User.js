const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userId: String,
    email: { type: String, unique: true },
    firstName: String,
    lastName: String,
    claimHistory: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);

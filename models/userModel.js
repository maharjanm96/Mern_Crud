const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Name is required"],
    unique: false,
  },
  age: {
    type: String,
    required: [true, "Age is required"],
    unique: false,
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    unique: false,
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;

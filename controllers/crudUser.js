const UserModel = require("../models/userModel");

const createUser = async (req, res) => {
  try {
    const { name, age } = req.body;

    const nameExists = await UserModel.findOne({ name });
    const ageExists = await UserModel.findOne({ age });
    if (nameExists && ageExists)
      return res.status(400).json("User already exists");

    const user = await UserModel.create(req.body);
    res.status(201).json({ message: "User Created", data: user });
    console.log(user);
  } catch (error) {
    console.log("Something went wrong", error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { ...restUserDetails } = req.body;
    const user = await UserModel.findByIdAndUpdate(userId, restUserDetails, {
      new: true,
    });
    res.status(200).json({ message: "User updated", data: user });
  } catch (err) {
    res.status(500).json({ messgae: "Something went wrong", error: err });
  }
};

module.exports = {createUser, updateUser};

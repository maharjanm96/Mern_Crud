const UserModel = require("../models/userModel");

const createUser = async (req, res) => {
  const { fullName, age } = req.body;
  try {
    const nameExists = await UserModel.findOne({ fullName });
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
  const { userId } = req.params;
  const { ...restUserDetails } = req.body;
  try {
    const user = await UserModel.findByIdAndUpdate(userId, restUserDetails, {
      new: true,
    });
    res.status(200).json({ message: "User updated", data: user });
  } catch (err) {
    res.status(500).json({ messgae: "Something went wrong", error: err });
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await UserModel.findByIdAndDelete(userId, req.body, {
      new: true,
    });
    res.status(200).json({ message: "User deleted", data: user });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong", error: error });
    console.log("Something went wrong", error);
  }
};

module.exports = { createUser, updateUser, deleteUser };

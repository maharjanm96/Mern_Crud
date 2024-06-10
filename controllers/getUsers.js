const UserModel = require("../models/userModel");

const getAllUsers = async (req, res) => {
  try {
    const allUser = await UserModel.find({});
    res.status(200).json(allUser);
  } catch (error) {
    console.error("Something went wrong", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getSingleUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const singleUser = await UserModel.findOne({ _id: userId });
    res
      .status(200)
      .json(singleUser ? singleUser : { message: "No user found" });
  } catch (error) {
    console.error("Something went wrong", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getAllUsers, getSingleUser };

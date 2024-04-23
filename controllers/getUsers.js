const UserModel = require("../models/userModel");

const getAllUsers = async (req, res) => {
  try {
    const allUser = await UserModel.find({});
    res.status(200).json(allUser);
  } catch (error) {
    console.log("Something went wrong", error).status(400);
  }
};

const getSingleUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const singleUser = await UserModel.findOne({ _id: userId });
    res.json(singleUser ? singleUser : "No user");
  } catch (error) {
    res.status(400).json("Something went wrong");
    console.log("Something went wrong", error);
  }
};

module.exports = { getAllUsers, getSingleUser };

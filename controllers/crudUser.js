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

module.exports = createUser;

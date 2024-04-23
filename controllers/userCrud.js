const UserModel = require("../models/userModel");

const createUser = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.json(user).sataus(201);
    console.log("User Created", user);
  } catch (error) {
    console.log("Something went wrong", error);
  }
};

module.exports = createUser;

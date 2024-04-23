const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Connected to database successfully");
  } catch (error) {
    console.log("Error connecting to database.", error);
  }
};

module.exports = dbConnect;

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello Mern Crud").status(200);
});

app.listen(PORT, () => {
  console.log(`Server started at port http://localhost:${PORT}`);
});

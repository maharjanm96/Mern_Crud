const express = require("express");
const cors = require("cors");
const dbConnect = require("./dbConfig/db");

require("dotenv").config();
dbConnect();

const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Mern Crud").status(200);
});

app.listen(PORT, () => {
  console.log(`Server started at port http://localhost:${PORT}`);
});

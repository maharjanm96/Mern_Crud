const express = require("express");
const cors = require("cors");
const dbConnect = require("./dbConfig/db");

require("dotenv").config();
dbConnect();

const PORT = process.env.PORT || 5000;

const user = require("./routes/userRoute");

const app = express();
app.use(cors());
app.use(express.json());

//routes
app.use("/api/users", user);

app.get("/", (req, res) => {
  res.send("This is a default route");
});

app.listen(PORT, () => {
  console.log(`Server started at port http://localhost:${PORT}`);
});

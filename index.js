const express = require("express");
const cors = require("cors");
const dbConnect = require("./dbConfig/db");

const app = express();

require("dotenv").config();
dbConnect();

const PORT = process.env.PORT;



app.use(express.json());
app.use(cors());

//routes
const user = require("./routes/userRoute");
app.use("/api/users", user);

app.get("/", (req, res) => {
  res.send("This is a default route");
});

app.listen(PORT, () => {
  console.log(`Server started at port http://localhost:${PORT}`);
});

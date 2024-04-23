const router = require("express").Router();
const { getAllUsers, getSingleUser } = require("../controllers/getUsers");
const {
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/crudUser");

router.get("/getallusers", getAllUsers);
router.get("/getsingleuser/:userId", getSingleUser);
router.post("/createuser", createUser);
router.patch("/updateuser/:userId", updateUser);
router.delete("/deleteuser/:userId", deleteUser);

module.exports = router;

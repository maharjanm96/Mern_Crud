const router = require("express").Router();
const {getAllUsers, getSingleUser} = require("../controllers/getUsers");
const {createUser, updateUser} = require("../controllers/crudUser");

router.get("/getallusers", getAllUsers);
router.get("/getsingleuser/:userId", getSingleUser);
router.post("/createuser", createUser)
router.patch("/updateuser/:userId", updateUser)

module.exports = router;

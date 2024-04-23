const router = require("express").Router();
const {getAllUsers, getSingleUser} = require("../controllers/getUsers");
const createUser = require("../controllers/crudUser");

router.get("/getallusers", getAllUsers);
router.get("/getsingleuser/:userId", getSingleUser);
router.post("/createuser", createUser)

module.exports = router;

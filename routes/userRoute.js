const router = require("express").Router();
const createUser = require("../controllers/userCrud");

router.get("/createuser", createUser);

module.exports = router;

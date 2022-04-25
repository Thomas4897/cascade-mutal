var express = require("express");
var router = express.Router();
const { createUserDB } = require("./Controller/usersController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Hello from users / Route");
});

router.post("/login", createUserDB);

module.exports = router;

const express = require("express");
const router = express.Router();

const login = require("../controllers/login.controller");
const register = require("../controllers/register.controller");

router.route("/login").post(login);
router.route("/register").post(register);

module.exports = router;
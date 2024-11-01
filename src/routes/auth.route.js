const express = require("express");
const router = express.Router();

const { login } = require("../controllers/login.controller");
const { register } = require("../controllers/register.controller");
const { refresh } = require("../controllers/refresh.controller");
const { logout } = require("../controllers/logout.controller");
const { verifyToken } = require("../middlewares/verify-token.middleware");

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/refresh").post(refresh);
router.route("/logout").post(verifyToken, logout);

module.exports = router;
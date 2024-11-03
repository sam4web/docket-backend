const jwt = require("jsonwebtoken");
const User = require("../models/user.model");


// @route /auth/logout
// @method POST
const logoutController = async (req, res) => {
  res.clearCookie("refreshToken");
  res.end();
};


module.exports = { logout: logoutController };
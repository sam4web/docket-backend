const jwt = require("jsonwebtoken");
const User = require("../models/user.model");


// @route /auth/logout
// @method POST
const logoutController = async (req, res) => {
  res.clearCookie("refreshToken", {
    sameSite: "None",
    secure: process.env.NODE_ENV !== "development",
  });
  res.end();
};


module.exports = { logout: logoutController };
const User = require("../models/user.model");
const { validateEmail, validatePassword } = require("../utils/validate-credentials.util");

// @route /auth/change-password
// @method POST
const changePasswordController = async (req, res) => {
  let { password } = req.body;

  // check if password is valid
  const passValid = validatePassword(password || "");
  if (!passValid.isValid) return res.status(400).json({ message: passValid.message });

  // check if user exists
  const foundUser = await User.findById(req.userId);
  if (!foundUser) return res.status(400).json({ message: "User does not exists." });

  // update password & save user
  foundUser.password = password;
  await foundUser.save();

  res.json({ message: "Password updated" });
};


module.exports = { changePassword: changePasswordController };
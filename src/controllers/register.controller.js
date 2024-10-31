const { validateEmail, validatePassword } = require("../utils/validate-credentials.util");
const User = require("../models/user.model");

// @route /auth/register
// @method POST
const register = async (req, res) => {
  let { username, email, password } = req.body;
  username = username?.trim();
  email = email?.trim();

  // check for credentials validation
  if (!username) return res.status(400).send("Username is required.");
  const emailValid = validateEmail(email || "");
  const passValid = validatePassword(password || "");
  if (!emailValid.isValid) return res.status(400).json({ message: emailValid.message });
  if (!passValid.isValid) return res.status(400).json({ message: passValid.message });

  try {
    // check if user with email exists
    const duplicateUser = await User.findOne({ email }).lean();
    if (duplicateUser) return res.status(400).json({ message: "User with this email exists." });

    // create new user & check if user is successfully created
    const user = await User.create({ username, email, password });
    const createdUser = await User.findById(user._id);
    if (!createdUser) return res.status(500).json({ message: "Something went wrong." });

    const accessToken = await createdUser.generateAccessToken();
    const refreshToken = await createdUser.generateRefreshToken();

    return res.status(200).json({ accessToken, refreshToken });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = register;

const User = require("../models/user.model");
const Note = require("../models/note.model");

const deleteUserController = async (req, res) => {
  await Note.deleteMany({ author: req.userId });
  await User.findByIdAndDelete(req.userId);
  res.clearCookie("refreshToken");
  res.sendStatus(204);
};


module.exports = { deleteUser: deleteUserController };
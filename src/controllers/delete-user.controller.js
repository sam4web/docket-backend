const User = require("../models/user.model");

const deleteUserController = async (req, res) => {
  await User.findByIdAndDelete(req.userId);
  res.sendStatus(204);
};


module.exports = { deleteUser: deleteUserController };
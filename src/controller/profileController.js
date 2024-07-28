const User = require('../models/User');

const getUserProfile = async (req, res) => {
	let { _id, email, createdAt } = await User.findOne({ _id: req.user.id });
	return res.json({ id: _id, email, createdAt });
};

module.exports = getUserProfile;

const User = require('../models/User');

const getUserProfile = async (req, res) => {
	const user = await User.findOne({ _id: req.user.id });
	if (!user) return res.status(400).json({ message: 'User not found' });
	return res.json({
		id: user._id,
		email: user.email,
		createdAt: user.createdAt,
	});
};

module.exports = getUserProfile;

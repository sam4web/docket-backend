const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
	const { email, password } = req.body;

	try {
		// Check for existing user
		let user = await User.findOne({ email });
		if (!user) return res.status(400).json({ message: 'User not found' });

		// Validate password
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch)
			return res.status(400).json({ message: 'Invalid credentials' });

		const id = user._id;

		// Create and sign JWT
		const payload = { user: { id } };
		jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{ expiresIn: '1d' },
			(err, token) => {
				if (err) throw err;
				return res.json({ token, user: id });
			}
		);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ message: 'Server error' });
	}
};

module.exports = login;

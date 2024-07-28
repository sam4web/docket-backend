const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
	const { email, password } = req.body;

	try {
		// Check for existing user
		let user = await User.findOne({ email });
		if (user) return res.status(400).json({ message: 'User already exists' });

		// Create new user
		user = new User({ email, password });
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(password, salt);
		await user.save();

		// Create and sign JWT
		const payload = {
			user: {
				id: user.id,
			},
		};

		jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{ expiresIn: '1d' },
			(err, token) => {
				if (err) throw err;
				res.json({ token });
			}
		);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ message: 'Server error' });
	}
};

module.exports = register;

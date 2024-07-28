const { validateEmail, validatePassword } = require('../utils/validate');

const validateCredentials = (req, res, next) => {
	const { email, password } = req.body;

	if (!email && !password) {
		return res.status(422).json({ message: 'Email and Password is required.' });
	}

	const emailValid = validateEmail(email || '');
	if (!emailValid.isValid) {
		return res.status(422).json({ message: emailValid.message });
	}
	const passValid = validatePassword(password || '');
	if (!passValid.isValid) {
		return res.status(422).json({ message: passValid.message });
	}
	next();
};

module.exports = validateCredentials;

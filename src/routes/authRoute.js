const express = require('express');
const router = express.Router();

const validateCredentials = require('../middlewares/validateCredentials');

const register = require('../controller/registerController');
const login = require('../controller/loginController');

router.post('/register', validateCredentials, register);
router.post('/login', validateCredentials, login);

module.exports = router;

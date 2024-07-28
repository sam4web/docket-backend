const express = require('express');
const router = express.Router();

const authenticate = require('../middlewares/authenticate');
const getUserProfile = require('../controller/profileController');

router.use(authenticate);
router.route('/').get(getUserProfile);

module.exports = router;

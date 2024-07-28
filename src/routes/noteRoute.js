const express = require('express');
const router = express.Router();

const authenticate = require('../middlewares/authenticate');

const {
	getNotes,
	getNote,
	createNote,
	updateNote,
	deleteNote,
} = require('../controller/noteContoller');

router.use(authenticate);
router.route('/').get(getNotes).post(createNote);
router.route('/:id').get(getNote).patch(updateNote).delete(deleteNote);

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send({ title: 'Docket', message: 'Note taking applicaion.' });
});

module.exports = router;

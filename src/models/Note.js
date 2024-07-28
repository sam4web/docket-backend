const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		body: { type: String, default: '' },
		color: { type: String, default: '#8d99ae' },
	},
	{ timestamps: true }
);

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;

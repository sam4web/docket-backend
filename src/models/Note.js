const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
	{
		author_id: { type: String, required: true },
		title: { type: String, required: true },
		body: { type: String, default: '' },
		style: { type: String, default: 'bg-[#8d99ae]' },
	},
	{ timestamps: true }
);

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;

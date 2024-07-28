const mongoose = require('mongoose');
const Note = require('../models/Note');

// GET all notes
const getNotes = async (req, res) => {
	try {
		const notes = await Note.find({ author_id: req.user.id }).sort({
			updatedAt: -1,
		});
		res.status(200).json(notes);
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
};

// GET single note
const getNote = async (req, res) => {
	const { id } = req.params;

	try {
		if (!mongoose.Types.ObjectId.isValid(id))
			return res
				.status(404)
				.send({ message: `Note with id '${id}' does not exists.` });

		const note = await Note.findById(id);

		if (!note)
			return res.status(404).send({ message: 'Note does not exists.' });

		if (note.author_id !== req.user.id)
			return res.status(401).send({ message: 'Note note accessible.' });

		return res.status(200).json(note);
	} catch (error) {
		return res.status(400).send({ message: error.message });
	}
};

// CREATE new note
const createNote = async (req, res) => {
	const { title, body, style } = req.body;

	if (!title.trim())
		return res.status(400).send({ message: 'Title field cannot be empty.' });

	try {
		const note = await Note.create({
			title,
			body,
			style,
			author_id: req.user.id,
		});
		return res.status(200).json(note);
	} catch (error) {
		return res.status(400).send({ message: error.message });
	}
};

// UPDATE a note
const updateNote = async (req, res) => {
	const { id } = req.params;
	const { title, body } = req.body;

	// delete note if title is empty
	if (!title.trim()) {
		await Note.deleteOne({ _id: id });
		return res.status(204);
	}

	try {
		if (!mongoose.Types.ObjectId.isValid(id))
			return res
				.status(404)
				.send({ message: `Note with id '${id}' does not exists.` });

		const note = await Note.findById(id);
		if (!note)
			return res.status(404).send({ message: 'Note does not exists.' });

		if (note.author_id !== req.user.id)
			return res.status(401).send({ message: 'Note note accessible.' });

		await Note.findOneAndUpdate({ _id: id }, { title, body });
		const updatedNote = await Note.findById(id);
		return res.status(200).json(updatedNote);
	} catch (error) {
		return res.status(400).send({ message: error.message });
	}
};

// DELETE a note
const deleteNote = async (req, res) => {
	const { id } = req.params;

	try {
		if (!mongoose.Types.ObjectId.isValid(id))
			return res
				.status(404)
				.send({ message: `Note with id '${id}' does not exists.` });

		const note = await Note.findById(id);
		if (!note)
			return res.status(404).send({ message: 'Note does not exists.' });

		if (note.author_id !== req.user.id)
			return res.status(401).send({ message: 'Note note accessible.' });

		await Note.deleteOne({ _id: id });
		return res.status(204);
	} catch (error) {
		return res.status(500).send({ message: error.message });
	}
};

module.exports = { getNotes, getNote, createNote, updateNote, deleteNote };

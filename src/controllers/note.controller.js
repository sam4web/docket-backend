const Note = require("../models/note.model");
const { isValidObjectId } = require("mongoose");


// @route /notes
// @method GET
const getAllNotes = async (req, res) => {
  const notes = await Note.find({}).select("-__v");
  if (!notes.length) return res.status(404).json({ message: "No notes found" });
  res.json(notes);
};


// @route /notes
// @method POST
const createNewNote = async (req, res) => {
  let { title, body } = req.body;
  title = title?.trim();
  body = body?.trim();
  // check if title is provided
  if (!title) return res.status(400).json({ message: "Title is required" });
  await Note.create({ title, body });
  res.json({ message: `Note with title ${title} created` });
};


// @route /notes/:id
// @method GET
const getNoteById = async (req, res) => {
  const { id } = req.params;
  // check if id is valid
  if (!isValidObjectId(id)) return res.status(400).json({ message: "Note Id note valid" });
  const note = await Note.findById(id).select("-__v").lean();
  // check if note exists
  if (!note) return res.status(404).json({ message: "Note not found" });
  res.json(note);
};


// @route /note/:id
// @method PATCH
const updateNote = async (req, res) => {
  const { id } = req.params;
  // check if id is valid
  if (!isValidObjectId(id)) return res.status(400).json({ message: "Note Id note valid" });

  let { title, body } = req.body;
  title = title?.trim();
  body = body?.trim();
  // check if title is provided
  if (!title) return res.status(400).json({ message: "Title is required" });

  const note = await Note.findByIdAndUpdate(id, { title, body }).lean();
  // check if note exists
  if (!note) return res.status(404).json({ message: "Note not found" });
  res.json({ message: `Note with title ${title} updated` });
};


// @route /note/:id
// @method DELETE
const deleteNote = async (req, res) => {
  const { id } = req.params;
  // check if id is valid
  if (!isValidObjectId(id)) return res.status(400).json({ message: "Note Id note valid" });
  const note = await Note.findByIdAndDelete(id);
  // check if note exists
  if (!note) return res.status(404).json({ message: "Note not found" });
  res.sendStatus(204);
};


module.exports = {
  getAllNotes,
  createNewNote,
  getNoteById,
  updateNote,
  deleteNote,
};
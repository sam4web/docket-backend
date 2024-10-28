const express = require("express");
const router = express.Router();
const note = require("../controllers/note.controller");

router.route("/")
  .get(note.getAllNotes)
  .post(note.createNewNote);

router.route("/:id")
  .get(note.getNoteById)
  .patch(note.updateNote)
  .delete(note.deleteNote);

module.exports = router;
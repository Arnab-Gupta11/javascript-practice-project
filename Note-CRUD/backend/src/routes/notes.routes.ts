import { Router } from "express";
import Note from "../models/notes.model";

const router = Router();

// Get All Notes
router.get("/", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// Get Single Note
router.get("/:id", async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
});

// Create Note
router.post("/", async (req, res) => {
  const { name, description } = req.body;
  const newNote = new Note({ name, description });
  await newNote.save();
  res.json(newNote);
});

// Update Note
router.put("/:id", async (req, res) => {
  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedNote);
});

// Delete Note
router.delete("/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
});

export default router;

// controllers/noteController.js
const jwt = require('jsonwebtoken');

const Note = require('../models/note');

exports.addNote = async (req, res) => {
  try {
    const { text } = req.body;
    const newNote = new Note({
      text,
    });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    console.error('Error adding note:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getAllNotes = async (req, res) => {
  try {
    // Extract user ID from the token
    const userId = req.user.user.id;

    // Fetch notes belonging to the authenticated user
    const notes = await Note.find({ userId }).sort({ createdAt: -1 });
    
    res.json(notes);
  } catch (error) {
    console.error('Error fetching notes:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

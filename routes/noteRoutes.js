// routes/noteRoutes.js

const express = require('express');
const router = express.Router();
const {addNote, getAllNotes} = require('../controllers/noteController');

router.post('/notes', addNote); // Update route to /api/notes
router.get('/notes', getAllNotes); // Update route to /api/notes


module.exports = router;




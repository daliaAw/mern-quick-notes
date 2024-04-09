// NoteForm/NoteForm.jsx

import React, { useState } from 'react';
import axios from 'axios';

const NoteForm = ({ addNote }) => {
  const [text, setText] = useState('');
  const [hasNotes, setHasNotes] = useState(false); // State to track whether notes exist

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/notes', { text }); // Update the URL to '/api/notes'
      addNote(response.data);
      setText('');
      setHasNotes(true); // Set hasNotes to true after adding a note
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <>
    {hasNotes ? null : <p className='NoNotes'>No Notes Yet!</p>} {/* Conditional rendering */}
    <form onSubmit={handleSubmit} className="note-form">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your note..."
        className='formTextarea'
      />
      <button type="submit" className="add-note-btn">Add Note</button>
    </form>
    </>
  );
};

export default NoteForm;

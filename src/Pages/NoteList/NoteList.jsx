import React from 'react';

const NoteList = ({ notes }) => {
  return (
    <div className="note-list">
      <ul>
      {notes.map((note, index) => (
        <li key={note.id || index}>
          <p>{note.text}</p>
          <p>{new Date(note.createdAt).toLocaleString()}</p>
          <hr />

        </li>
      ))}
      </ul>
    </div>
  );
};

export default NoteList;

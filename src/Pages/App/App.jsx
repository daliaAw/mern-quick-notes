// App.jsx
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NoteForm from '../NoteForm/NoteForm';
import NoteList from '../NoteList/NoteList';
import AuthPage from '../AuthPage/AuthPage';
import { getUser } from '../../utilities/users-service'
import NavBar from '../../components/NavBar/NavBar'

function App() {
  const [user, setUser] = useState(getUser())
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const user = getUser();
      if (!user || !user.token) {
        // Handle the case where user or token is not available
        return;
      }
  
      const response = await axios.get('api/notes', {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
      // You can add some user feedback here (e.g., set an error state)
    }
  };
  
  

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <>
    <main className="App container">
      {/* this {} is not an Obj or code block it represent that in this position we are putting expression */}
      {user ? 
      <>
        <NavBar user={user} setUser={setUser} />
       <h1>My Notes</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} />
      </>
        :
      <AuthPage setUser={setUser} />}
    </main>
    </>
  );
}

export default App;

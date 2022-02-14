import React from 'react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import NotesList from './components/NotesList';
const App = () => {
  const [notes, setNotes] = useState([
  {
    id: nanoid(),
    text: "This is my first note!",
    date: "02/14/2022"
  },
  {
    id: nanoid(),
    text: "This is my second note!",
    date: "02/10/2022"
  },
  {
    id: nanoid(),
    text: "This is my third note!",
    date: "02/12/2022"
  },
]);

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid,
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
};

  return ( <div className="container">
  <NotesList notes={notes} handleAddNote={addNote}/>
  </div>
  );
};

export default App;
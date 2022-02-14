import React from 'react';
import Note from './Note';
import AddNote from './AddNote';
const NotesList = ({ notes,handleAddNote }) => {
  return(
    <div className='notes-list'>
      {notes.map((note)=> (
      <Note id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};
export default NotesList;
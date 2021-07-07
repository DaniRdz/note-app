import { useState, useRef } from "react";
import { Togglable } from "./Togglable";

export const NoteForm = ({ addNewNote }) => {
  const [newNote, setNewNote] = useState("");
  const togglableRef = useRef();

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNoteToAdd = {
      content: newNote,
      important: false,
    };

    addNewNote(newNoteToAdd);
    setNewNote("");
    togglableRef.current.togglableVisibility();
  };

  return (
    <Togglable buttonLabel="Create Notes" ref={togglableRef}>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Create a new note.."
          onChange={handleChange}
          value={newNote}
        />
        <button>Create Note</button>
      </form>
    </Togglable>
  );
};

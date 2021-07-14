import { useState, useRef } from "react";
import PropTypes from "prop-types";

import { Togglable } from "./Togglable";

const NoteForm = ({ addNewNote }) => {
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
        <button id="form-create-note-btn">Create Note</button>
      </form>
    </Togglable>
  );
};
NoteForm.propTypes = {
  addNewNote: PropTypes.func,
};

export { NoteForm };

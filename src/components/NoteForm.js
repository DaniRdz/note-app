import { useState } from "react";
import { Togglable } from "./Togglable";

export const NoteForm = ({ addNewNote }) => {
  const [newNote, setNewNote] = useState("");

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
  };

  return (
    <Togglable buttonLabel="Create Notes">
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

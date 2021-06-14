import { useState } from "react";

import { Note } from "./components/Note";
import "./App.css";

function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newNoteToAdd = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: false,
    };

    setNotes(notes.concat(newNoteToAdd));
    setNewNote("");
  };
  const handleShow = () => {
    setShowAll(() => !showAll);
  };
  return (
    <div className="App">
      <h1>Notes</h1>
      <button onClick={handleShow}>
        {showAll ? "Show Importants" : "Show All"}
      </button>
      <ul>
        {notes
          .filter((note) => {
            if (showAll === true) return true;
            return note.important === true;
          })
          .map((note) => (
            <Note key={note.id} {...note} />
          ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={newNote} />
        <button>Crate Note</button>
      </form>
    </div>
  );
}

export default App;

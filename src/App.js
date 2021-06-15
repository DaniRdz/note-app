import { useEffect, useState } from "react";

import { Note } from "./components/Note";

import { createNewNote, getAllNotes } from "./services/notes";

import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllNotes().then((notes) => {
      setNotes(notes);
      setIsLoading(false);
    });
  }, []);

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newNoteToAdd = {
      content: newNote,
      important: false,
    };
    createNewNote(newNoteToAdd).then((newNote) => {
      setNotes((prevNotes) => prevNotes.concat(newNote));
    });

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
      {isLoading ? (
        <div>Loading....</div>
      ) : (
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
      )}
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={newNote} />
        <button>Crate Note</button>
      </form>
    </div>
  );
}

export default App;

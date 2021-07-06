import { useEffect, useState } from "react";

import { Note } from "./components/Note";
import { LoginForm } from "./components/LoginForm";
import { NoteForm } from "./components/NoteForm";

import { createNewNote, getAllNotes } from "./services/notes";

import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    getAllNotes().then((notes) => {
      setNotes(notes);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteAppUser");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    window.localStorage.removeItem("loggedNoteAppUser");
  };

  const addNewNote = (newNoteToAdd) => {
    const { token } = user;
    createNewNote(newNoteToAdd, { token }).then((newNote) => {
      setNotes((prevNotes) => prevNotes.concat(newNote));
    });
  };
  const handleShow = () => {
    setShowAll(() => !showAll);
  };

  return (
    <div className="App">
      <h1>Notes</h1>
      <h2>{errorMessage}</h2>
      {!user ? (
        <LoginForm
          handleChangeErrorMessage={setErrorMessage}
          handleChangeUser={setUser}
        />
      ) : (
        <>
          <NoteForm addNewNote={addNewNote} />
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </>
      )}

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
    </div>
  );
}

export default App;

import { useState } from "react";

import { login } from "../services/login";

export const LoginForm = ({ handleChangeErrorMessage, handleChangeUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login({ username, password })
      .then((user) => {
        setUsername("");
        setPassword("");
        window.localStorage.setItem("loggedNoteAppUser", JSON.stringify(user));
        handleChangeUser(user);
      })
      .catch((e) => {
        handleChangeErrorMessage("Wrong credentials");
        setTimeout(() => {
          handleChangeErrorMessage("");
        }, 5000);
      });
  };
  return (
    <form onSubmit={handleLoginSubmit}>
      <div>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          placeholder="Username"
          value={username}
        />
      </div>
      <div>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="Password"
          value={password}
        />
      </div>
      <button>Login</button>
    </form>
  );
};

import { useState } from "react";
import PropTypes from "prop-types";

import { login } from "../services/login";

import { Togglable } from "./Togglable";

const LoginForm = ({ handleChangeErrorMessage, handleChangeUser }) => {
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
    <Togglable buttonLabel="Show Login">
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
    </Togglable>
  );
};
LoginForm.propTypes = {
  handleChangeUser: PropTypes.func.isRequired,
  handleChangeErrorMessage: PropTypes.func.isRequired,
};

export { LoginForm };

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const notes = [
  { id: 1, content: "Hello my friends", date: "14/06/2021", important: true },
  { id: 2, content: "Hello from react", date: "14/06/2021", important: true },
  { id: 3, content: "Todo this", date: "14/06/2021", important: false },
];

ReactDOM.render(
  <React.StrictMode>
    <App notes={notes} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

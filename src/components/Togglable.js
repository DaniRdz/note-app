import { useState } from "react";

export const Togglable = ({ children, buttonLabel }) => {
  const [visible, setVisible] = useState(false);

  const hideVisible = { display: visible ? "none" : "" };
  const showVisible = { display: visible ? "" : "none" };

  return (
    <div>
      <div style={hideVisible}>
        <button onClick={() => setVisible(true)}>{buttonLabel}</button>
      </div>
      <div style={showVisible}>
        <div>{children}</div>
        <button onClick={() => setVisible(false)}>Cancel</button>
      </div>
    </div>
  );
};

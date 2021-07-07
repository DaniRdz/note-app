import { forwardRef, useImperativeHandle, useState } from "react";

export const Togglable = forwardRef(({ children, buttonLabel }, ref) => {
  const [visible, setVisible] = useState(false);

  const hideVisible = { display: visible ? "none" : "" };
  const showVisible = { display: visible ? "" : "none" };

  const togglableVisibility = () => setVisible(!visible);

  useImperativeHandle(ref, () => {
    return {
      togglableVisibility,
    };
  });

  return (
    <div>
      <div style={hideVisible}>
        <button onClick={togglableVisibility}>{buttonLabel}</button>
      </div>
      <div style={showVisible}>
        <div>{children}</div>
        <button onClick={togglableVisibility}>Cancel</button>
      </div>
    </div>
  );
});

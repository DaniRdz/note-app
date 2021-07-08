import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import { Note } from "./Note";

test("render content", () => {
  const note = {
    content: "this is a test",
    important: true,
  };

  const component = render(<Note {...note} />);
  component.getByText(note.content);
});

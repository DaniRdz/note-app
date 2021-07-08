import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";

import { Togglable } from "./Togglable";

describe("<Togglable/>", () => {
  let component;
  const buttonLabel = "show";

  beforeEach(() => {
    component = render(
      <Togglable buttonLabel={buttonLabel}>
        <div>Hello Show</div>
      </Togglable>
    );
  });

  test("render childrens", () => {
    component.getByText("Hello Show");
  });

  test("test if component is not visible", () => {
    const el = component.getByText("Hello Show");
    expect(el.parentNode).toHaveStyle("display: none");
  });

  test("after clicking its children must be show", () => {
    const btn = component.getByText(buttonLabel);
    fireEvent.click(btn);

    const el = component.getByText("Hello Show");
    expect(el.parentNode).not.toHaveStyle("display: none");
  });

  test("toogled content can be closed", () => {
    const btn = component.getByText(buttonLabel);
    fireEvent.click(btn);

    const cancelBtn = component.getByText("Cancel");
    fireEvent.click(cancelBtn);

    const el = component.getByText("Hello Show");
    expect(el.parentNode).toHaveStyle("display: none");
  });
});

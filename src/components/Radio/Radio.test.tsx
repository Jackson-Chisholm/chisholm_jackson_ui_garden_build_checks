import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import { Radio } from "./Radio";

test("Checks if the button is fully active", () => {
  render(<Radio label="Test Radio" />);
  expect(screen.getByLabelText("Test Radio")).toBeVisible();
});

test("Check if the button changes when disabled", () => {
  render(<Radio label="Off Radio" disabled />);

  expect(screen.getByText("Off Radio")).toHaveStyle(
    "background-color: #cccccc",
  );
  expect(screen.getByLabelText("Off Radio")).toHaveStyle("cursor: not-allowed");
});

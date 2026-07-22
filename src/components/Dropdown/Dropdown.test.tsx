import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import { Dropdown } from "./Dropdown";

test("Checks if the button is fully active", () => {
  render(<Dropdown id="Test ID" optionA="Value1" optionB="Value2" />);
  expect(screen.getByText("Value1")).toBeVisible();
});

test("Check if the button changes when disabled", () => {
  render(<Dropdown id="False ID" optionA="Value3" optionB="Value4" disabled />);

  expect(screen.getByTestId("dropdown")).toHaveStyle(
    "background-color: #cccccc",
  );
  expect(screen.getByTestId("dropdown")).toHaveStyle("cursor: not-allowed");
});

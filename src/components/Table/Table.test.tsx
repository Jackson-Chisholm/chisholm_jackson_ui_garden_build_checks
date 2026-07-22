import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import { Table } from "./Table";

test("Checks if the button is fully active", () => {
  render(<Table />);
  expect(screen.getByText("Makoto Yuki")).toBeVisible();
});

test("Check if the button changes when disabled", () => {
  render(<Table disabled />);

  expect(screen.getByTestId("table")).toHaveStyle("background-color: #cccccc");
  expect(screen.getByTestId("table")).toHaveStyle("cursor: not-allowed");
});

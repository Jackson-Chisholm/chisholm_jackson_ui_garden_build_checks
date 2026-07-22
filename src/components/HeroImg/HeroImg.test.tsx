import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import { HeroImg } from "./HeroImg";

test("Checks if the Hero Image is fully active", () => {
  render(<HeroImg src="test.png" alt="uno" />);
  expect(screen.getByAltText("uno")).toBeVisible();
});

test("Check if the Hero Image changes when disabled", () => {
  render(<HeroImg src="off.png" alt="dos" disabled />);

  expect(screen.getByTestId("hero-image")).toHaveStyle(
    "background-color: #cccccc",
  );
  expect(screen.getByTestId("hero-image")).toHaveStyle("cursor: not-allowed");
});

import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toHaveStyle({ backgroundColor: "Medium Violet Red" });
});

test("button has correct initial text", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toHaveTextContent("Change to Midnight Blue");
});
test("button turns MidnightBlue when clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

test("initial state - button enable, checkbox unchecked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toBeEnabled();
  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("checkbox disabled button on first click and enable on second click", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
});

test("button color on when checkbox is checked is grey", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });
});

test('disabled button have grey background, change back to MediumVioletRed "MediumVioletRed to grey to MediumVioletRed"', () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });

  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});
test('disabled button have grey background, change back to MidnightBlue "MidnightBlue to grey to MidnightBlue"', () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  fireEvent.click(colorButton);

  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });

  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letter", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letter", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});

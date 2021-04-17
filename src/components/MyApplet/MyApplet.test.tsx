import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import MyApplet from "./MyApplet";
import {
  activeArgs,
  differentColorArgs,
  inactiveArgs,
} from "./MyApplet.stories";

it("renders the Active story", () => {
  render(<MyApplet {...activeArgs} onActiveChange={jest.fn()} />);
});

it("renders the Inactive story", () => {
  render(<MyApplet {...inactiveArgs} onActiveChange={jest.fn()} />);
});

it("renders the DifferentColor story", () => {
  render(<MyApplet {...differentColorArgs} onActiveChange={jest.fn()} />);
});

it("calls active event on change", () => {
  const handleActiveChange = jest.fn();

  render(
    <MyApplet
      active
      color="blue"
      text="If CPU usage is high, then close Chrome."
      onActiveChange={handleActiveChange}
    />
  );
  fireEvent.click(screen.getByRole("checkbox"));

  expect(handleActiveChange).toHaveBeenCalledWith(false);
});

it("calls inactive event on change", () => {
  const handleActiveChange = jest.fn();

  render(
    <MyApplet
      active={false}
      color="blue"
      text="If CPU usage is high, then close Chrome."
      onActiveChange={handleActiveChange}
    />
  );
  fireEvent.click(screen.getByRole("checkbox"));

  expect(handleActiveChange).toHaveBeenCalledWith(true);
});

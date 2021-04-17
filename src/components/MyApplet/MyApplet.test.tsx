import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Active, InActive, DifferentColor } from "./MyApplet.stories";

it("renders the Active story", () => {
  render(<Active {...Active.args} />);
});

it("renders the InActive story", () => {
  render(<InActive {...InActive.args} />);
});

it("renders the DifferentColor story", () => {
  render(<DifferentColor {...DifferentColor.args} />);
});

it("calls active event on change", () => {
  const handleActiveChange = jest.fn();

  render(<Active {...Active.args} onActiveChange={handleActiveChange} />);
  fireEvent.click(screen.getByRole("checkbox"));

  expect(handleActiveChange).toHaveBeenCalledWith(false);
});

it("calls inactive event on change", () => {
  const handleActiveChange = jest.fn();

  render(<InActive {...InActive.args} onActiveChange={handleActiveChange} />);
  fireEvent.click(screen.getByRole("checkbox"));

  expect(handleActiveChange).toHaveBeenCalledWith(true);
});

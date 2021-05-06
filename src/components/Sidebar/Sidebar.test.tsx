import React from "react";
import { render } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { homeArgs, newArgs, settingsArgs } from "./Sidebar.stories";

it("renders the Home story", () => {
  render(<Sidebar {...homeArgs} />);
});

it("renders the New story", () => {
  render(<Sidebar {...newArgs} />);
});

it("renders the Settings story", () => {
  render(<Sidebar {...settingsArgs} />);
});

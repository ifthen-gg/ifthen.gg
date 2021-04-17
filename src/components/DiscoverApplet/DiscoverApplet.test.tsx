import React from "react";

import { render, screen } from "@testing-library/react";

import {
  leagueArgs,
  tooMuchTextArgs,
  valorantArgs,
} from "./DiscoverApplet.stories";
import DiscoverApplet from "./DiscoverApplet";

it("renders the League story", () => {
  render(<DiscoverApplet {...leagueArgs} />);
});

it("renders the Valorant story", () => {
  render(<DiscoverApplet {...valorantArgs} />);
});

it("renders the Too Much Text story", () => {
  render(<DiscoverApplet {...tooMuchTextArgs} />);
});

it("checks the href to be the same as in leagueArgs", () => {
  render(<DiscoverApplet {...leagueArgs} />);
  expect(screen.getByRole("link")).toHaveProperty(
    "href",
    window.location + leagueArgs.href
  );
});

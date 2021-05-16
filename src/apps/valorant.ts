import { App } from "./types";
import valorantSrc from "../assets/apps/valorant.png";
import leagueQueue from "../triggers/leagueQueue";

const valorant: App = {
  title: "Valorant",
  imgSrc: valorantSrc,
  triggers: [leagueQueue],
  actions: [],
};

export default valorant;

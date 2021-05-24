import { App } from "./types";
import valorantSrc from "../assets/apps/valorant.png";
import leagueQueue from "../triggers/leagueQueue";

export const VALORANT = "valorant";

const valorant: App = {
  name: VALORANT,
  title: "Valorant",
  imgSrc: valorantSrc,
  triggers: [leagueQueue],
  actions: [],
};

export default valorant;

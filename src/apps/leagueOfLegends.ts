import { App } from "./types";
import leagueOfLegendsSrc from "../assets/apps/leagueOfLegends.png";
import leagueQueue from "../triggers/leagueQueue";

export const LEAGUE_OF_LEGENDS = "leagueOfLegends";

const leagueOfLegends: App = {
  name: LEAGUE_OF_LEGENDS,
  title: "League of Legends",
  imgSrc: leagueOfLegendsSrc,
  triggers: [leagueQueue],
  actions: [],
};
export default leagueOfLegends;

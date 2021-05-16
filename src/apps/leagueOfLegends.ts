import { App } from "./types";
import leagueOfLegendsSrc from "../assets/apps/leagueOfLegends.png";
import leagueQueue from "../triggers/leagueQueue";

const leagueOfLegends: App = {
  title: "League of Legends",
  imgSrc: leagueOfLegendsSrc,
  triggers: [leagueQueue],
  actions: [],
};

export default leagueOfLegends;

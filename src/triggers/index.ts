export * from "./types";
export { default as triggerTarget } from "./triggerTarget";

import leagueQueue from "./leagueQueue";
export * from "./leagueQueue";

export const triggersObject = {
  leagueQueue,
};

export const triggers = Object.values(triggersObject);

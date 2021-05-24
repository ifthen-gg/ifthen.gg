import type { TriggerName } from "./types";
export * from "./types";
export { default as triggerTarget } from "./triggerTarget";

import leagueQueue from "./leagueQueue";
export * from "./leagueQueue";

export const triggersObject = {
  leagueQueue,
};

export const triggerNames = Object.keys(triggersObject) as TriggerName[];

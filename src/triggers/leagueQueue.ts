import type { Trigger } from "./types";

let handleInfoUpdates: ((res: any) => void) | null = null;
const leagueQueue: Trigger = {
  title: "League Queue",
  description: "This triggers when League of Legends queue changes",
  onTrigger: (callback) => {
    overwolf.games.launchers.events.setRequiredFeatures(
      10902,
      ["lobby_info"],
      () => {
        handleInfoUpdates = (res: any) => {
          callback(res.info.lobby_info.queueId);
        };

        overwolf.games.launchers.events.onInfoUpdates.addListener(
          handleInfoUpdates
        );
      }
    );
  },
  removeTrigger: () => {
    if (handleInfoUpdates) {
      overwolf.games.launchers.events.onInfoUpdates.removeListener(
        handleInfoUpdates
      );
      handleInfoUpdates = null;
    }
  },
};

export default leagueQueue;

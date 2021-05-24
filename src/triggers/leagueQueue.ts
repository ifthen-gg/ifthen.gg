import type { Trigger } from "./types";

export const LEAGUE_QUEUE = "leagueQueue";
const LEAGUE_LAUNCHER_ID = 10902;
const REQUIRED_FEATURES = ["lobby_info"];

const leagueQueue: Trigger<string> = {
  name: LEAGUE_QUEUE,
  title: "League Queue",
  description: "This triggers when League of Legends queue changes",
  listen(callback) {
    const handleInfoUpdates = (res: any) => {
      callback(res.info.lobby_info.queueId);
    };

    overwolf.games.launchers.events.setRequiredFeatures(
      LEAGUE_LAUNCHER_ID,
      REQUIRED_FEATURES,
      () => {
        overwolf.games.launchers.events.onInfoUpdates.addListener(
          handleInfoUpdates
        );
      }
    );

    return () => {
      overwolf.games.launchers.events.onInfoUpdates.removeListener(
        handleInfoUpdates
      );
    };
  },
};

export default leagueQueue;

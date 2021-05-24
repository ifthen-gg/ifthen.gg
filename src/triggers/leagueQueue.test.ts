import triggerTarget from "./triggerTarget";

function mockLeagueQueue(
  requiredFeaturesResult: overwolf.games.launchers.events.SetRequiredFeaturesResult,
  infoUpdate: unknown
) {
  overwolf.games.launchers.events.setRequiredFeatures = jest.fn(
    (launcherClassId, features, callback) => callback(requiredFeaturesResult)
  );
  overwolf.games.launchers.events.onInfoUpdates.addListener = jest.fn(
    (callback) => callback(infoUpdate)
  );
  overwolf.games.launchers.events.onInfoUpdates.removeListener = jest.fn();
}

const originConsoleError = console.error;

describe("leagueQueue", () => {
  afterEach(() => {
    triggerTarget.listeners = {};
    triggerTarget.dispatches = {};
    console.error = originConsoleError;
    // @ts-ignore
    delete overwolf.games;
  });

  it("dispatch queueId", (done) => {
    mockLeagueQueue(
      {
        success: true,
        supportedFeatures: ["lobby_info"],
      },
      {
        feature: "lobby_info",
        info: {
          lobby_info: {
            queueId: "440",
          },
        },
      }
    );
    const handleLeagueQueue = jest.fn((data) => {
      try {
        expect(data).toBe("440");
        done();
      } catch (error) {
        done(error);
      }
    });

    triggerTarget.addEventListener("leagueQueue", handleLeagueQueue);
  });

  it("bypass other info updates", (done) => {
    mockLeagueQueue(
      {
        success: true,
        supportedFeatures: ["lobby_info"],
      },
      {
        feature: "end_game",
        info: {
          tft_end_game_stats: "",
        },
      }
    );
    const handleLeagueQueue = jest.fn();

    triggerTarget.addEventListener("leagueQueue", handleLeagueQueue);

    // Wait a bit to verify that it's not called
    setTimeout(() => {
      try {
        expect(handleLeagueQueue).not.toHaveBeenCalled();
        done();
      } catch (error) {
        done(error);
      }
    }, 20);
  });

  it("fails if required feature is not available", (done) => {
    console.error = jest.fn((error) => {
      try {
        expect(error.startsWith("[leagueQueue]:")).toBe(true);
        done();
      } catch (error) {
        done(error);
      }
    });

    mockLeagueQueue(
      {
        success: true,
        supportedFeatures: [],
      },
      {
        feature: "lobby_info",
        info: {
          lobby_info: {
            queueId: "440",
          },
        },
      }
    );
    const handleLeagueQueue = jest.fn();

    triggerTarget.addEventListener("leagueQueue", handleLeagueQueue);
  });

  it("fails if required feature is failed", (done) => {
    console.error = jest.fn((error) => {
      try {
        expect(error.startsWith("[leagueQueue]:")).toBe(true);
        done();
      } catch (error) {
        done(error);
      }
    });

    mockLeagueQueue(
      {
        success: false,
        error: "Something wrong happend",
        supportedFeatures: [],
      },
      {
        feature: "lobby_info",
        info: {
          lobby_info: {
            queueId: "440",
          },
        },
      }
    );
    const handleLeagueQueue = jest.fn();

    triggerTarget.addEventListener("leagueQueue", handleLeagueQueue);
  });

  it("clean up after event lisenter is removed", () => {
    mockLeagueQueue(
      {
        success: true,
        supportedFeatures: ["lobby_info"],
      },
      {
        feature: "lobby_info",
        info: {
          lobby_info: {
            queueId: "440",
          },
        },
      }
    );

    const handleLeagueQueue = jest.fn();

    triggerTarget.addEventListener("leagueQueue", handleLeagueQueue);
    triggerTarget.removeEventListener("leagueQueue", handleLeagueQueue);

    expect(
      overwolf.games.launchers.events.onInfoUpdates.removeListener
    ).toHaveBeenCalled();
  });
});

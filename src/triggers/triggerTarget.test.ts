import triggerTarget from "./triggerTarget";

describe("triggerTarget", () => {
  it("dispatch event", () => {
    const handleLeagueQueue = jest.fn();

    triggerTarget.addEventListener("leagueQueue", handleLeagueQueue);
    triggerTarget.dispatchEvent("leagueQueue", "400");

    expect(handleLeagueQueue).toHaveBeenCalled();
  });

  it("handles multiple event listeners", () => {
    const handleLeagueQueue1 = jest.fn();
    const handleLeagueQueue2 = jest.fn();

    triggerTarget.addEventListener("leagueQueue", handleLeagueQueue1);
    triggerTarget.addEventListener("leagueQueue", handleLeagueQueue2);
    triggerTarget.dispatchEvent("leagueQueue", "400");

    expect(handleLeagueQueue1).toHaveBeenCalled();
    expect(handleLeagueQueue2).toHaveBeenCalled();
  });

  it("removes event listener", () => {
    const handleLeagueQueue1 = jest.fn();
    const handleLeagueQueue2 = jest.fn();

    triggerTarget.addEventListener("leagueQueue", handleLeagueQueue1);
    triggerTarget.addEventListener("leagueQueue", handleLeagueQueue2);
    triggerTarget.removeEventListener("leagueQueue", handleLeagueQueue1);
    triggerTarget.dispatchEvent("leagueQueue", "400");

    expect(handleLeagueQueue1).not.toHaveBeenCalled();
    expect(handleLeagueQueue2).toHaveBeenCalled();
  });

  it("dispatch with data", () => {
    const data = "440";
    const handleLeagueQueue = jest.fn();

    triggerTarget.addEventListener("leagueQueue", handleLeagueQueue);
    triggerTarget.dispatchEvent("leagueQueue", data);

    expect(handleLeagueQueue).toHaveBeenCalledWith(data);
  });
});

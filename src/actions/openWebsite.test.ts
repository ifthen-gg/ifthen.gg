import openWebsite from "./openWebsite";

describe("openWebsite", () => {
  it("calls overwolf.utils.openUrlInDefaultBrowser", () => {
    overwolf.utils.openUrlInDefaultBrowser = jest.fn();
    openWebsite.execute("https://th.gl");

    expect(overwolf.utils.openUrlInDefaultBrowser).toHaveBeenCalledWith(
      "https://th.gl"
    );
  });
});

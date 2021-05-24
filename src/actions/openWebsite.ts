import { Action } from "./types";

export const OPEN_WEBSITE = "openWebsite";

const openWebsite: Action<string> = {
  name: OPEN_WEBSITE,
  title: "Open Website",
  description: "Opens a website",
  execute: (url) => {
    overwolf.utils.openUrlInDefaultBrowser(url);
  },
};

export default openWebsite;

import { Action } from "./types";

const openWebsite: Action = {
  title: "Open Website",
  description: "Opens a website",
  execute: (url) => {
    overwolf.utils.openUrlInDefaultBrowser(url);
  },
};

export default openWebsite;

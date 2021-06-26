import openWebsite from "./actions/openWebsite";
import apps from "./apps";
import { triggerTarget } from "./triggers";
import { openWindow } from "./utils/ow";

console.log("Starting background process");

console.log(`All apps: ${apps.map((app) => app.title)}`);

function handleLeagueQueue(queueId: string) {
  console.log(`New QueueId: ${queueId}`);
  openWebsite.execute("https://th.gl/");
  triggerTarget.removeEventListener("leagueQueue", handleLeagueQueue);
}

triggerTarget.addEventListener("leagueQueue", handleLeagueQueue);
openWindow("desktop");

export {};

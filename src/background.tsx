import openWebsite from "./actions/openWebsite";
import { triggerTarget } from "./triggers";

console.log("Starting background process");

function handleLeagueQueue(queueId: string) {
  console.log(`New QueueId: ${queueId}`);
  openWebsite.execute("https://th.gl/");
  triggerTarget.removeEventListener("leagueQueue", handleLeagueQueue);
}

triggerTarget.addEventListener("leagueQueue", handleLeagueQueue);

export {};

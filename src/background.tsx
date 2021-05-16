import openWebsite from "./actions/openWebsite";
import leagueQueue from "./triggers/leagueQueue";

console.log("Starting background process");

leagueQueue.onTrigger((queueId) => {
  openWebsite.execute("https://th.gl/");
  console.log(queueId);
  leagueQueue.removeTrigger();
});
// overwolf.windows.obtainDeclaredWindow("desktop", (result) => {
//   overwolf.windows.restore(result.window.id, console.log);
// });

export {};

import schedule from "node-schedule";
import { writeFileSync } from "fs";
import fetch from "node-fetch";

const CONSTANTS = {
  APISERVER: "https://catfact.ninja/fact",
  FETCHINTERVAL: 12,
};
async function fetchData() {
  let currentTime = new Date();
  console.log(
    `Fetching data from: ${
      CONSTANTS.APISERVER
    } at ${currentTime.getHours()} next fetch in: ${
      CONSTANTS.FETCHINTERVAL
    } hours`
  );
  let response = await fetch(CONSTANTS.APISERVER);
  let myJson = await response.text();
  console.log(myJson);
  //writeFileSync(`./data${currentTime.getHours()}.json`, myJson);
}
class dataFetcher {
  startFetcher() {
    console.log("Starting Fetcher...");
    const job = schedule.scheduleJob("0 */12 * * *", () => fetchData());
  }
}

export default new dataFetcher();

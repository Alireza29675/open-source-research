const { success } = require("../src/logger");
const { rawStorage, backupIfPossible } = require("../src/storage-manager");
const dataCollector = require("../src/data-collector");

backupIfPossible();

const usersToCollect = [
  { username: "facebook" },
  { username: "uber" },
  { username: "google" },
  { username: "airbnb" },
  { username: "microsoft" },
  { username: "github" },
  { username: "notion" },
];

async function collect() {
  for (let { username } of usersToCollect) {
    const repos = await dataCollector.getAllRepos(username);
    if (repos.length > 0) {
      rawStorage.state[username] = repos;
      rawStorage.save();
      success(`${username} has been fetched`);
    }
  }
}

collect();

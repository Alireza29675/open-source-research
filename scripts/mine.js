const { bakedStorage } = require("../src/storage-manager");
const { arrayToCSV } = require("../src/exporter");

const spreadsheet = [];
const repos = bakedStorage.state.extractedInfo;

for (let company in repos) {
  for (let repo of repos[company]) {
    if (repo.archived) continue;
    const rowInfo = {};
    rowInfo["Name"] = repo.name;
    rowInfo["URL"] = repo.url;
    rowInfo["Owner"] = company[0].toUpperCase() + company.slice(1);
    rowInfo["Stars"] = repo.stars;
    rowInfo["Forks"] = repo.forks;
    rowInfo["Created"] = repo.created_at;
    rowInfo["Updated"] = repo.updated_at;
    rowInfo["Language"] = repo.language || "Not Specified";
    rowInfo["License"] = !repo.license ? "No License" : repo.license.name;
    spreadsheet.push(rowInfo);
  }
}

arrayToCSV(spreadsheet, "data.csv");

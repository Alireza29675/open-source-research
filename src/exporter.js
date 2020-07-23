const fs = require("fs");
const path = require("path");

const arrayToCSV = (arr, toFile) => {
  const columnNames = Object.entries(arr[0]).map((item) => item[0]);
  let csv = columnNames.join(",") + "\n";
  for (let row of arr) {
    const rowArray = Object.entries(row).map((item) => item[1]);
    csv += rowArray.join(",") + "\n";
  }
  fs.writeFileSync(path.resolve(__dirname, "../export/", toFile), csv);
};

module.exports = {
  arrayToCSV,
};

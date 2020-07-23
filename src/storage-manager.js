const path = require("path");
const fs = require("fs");
const HandyStorage = require("handy-storage");
const { notice } = require("./logger");

const dataRootSrc = path.resolve(__dirname, "..", "./data");

const mainRawSource = path.resolve(dataRootSrc, "data.json");
const backupRawSource = path.resolve(dataRootSrc, "data_backup.json");
const bakedSource = path.resolve(dataRootSrc, "baked.json");

function backupIfPossible() {
  if (fs.existsSync(mainRawSource)) {
    fs.copyFileSync(mainRawSource, backupRawSource);
    notice("Previous data file was backed up to " + backupRawSource);
  }
}

const rawStorage = new HandyStorage({});
rawStorage.connect(mainRawSource);

const bakedStorage = new HandyStorage({});
bakedStorage.connect(bakedSource);

module.exports = {
  rawStorage,
  bakedStorage,
  backupIfPossible,
};

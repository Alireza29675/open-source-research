const { success } = require("../src/logger");
const { rawStorage, bakedStorage } = require("../src/storage-manager");

const extractFromRawToBakedStorage = () => {
  bakedStorage.state.extractedInfo = {};
  for (let username in rawStorage.state) {
    bakedStorage.state.extractedInfo[username] = rawStorage.state[username].map(
      (item) => {
        return {
          name: item.name,
          url: item.html_url,
          description: item.description,
          created_at: item.created_at,
          updated_at: item.updated_at,
          stars: item.stargazers_count,
          language: item.language,
          license: item.license,
          archived: item.archived,
          forks: item.forks_count,
        };
      }
    );
  }
  bakedStorage.save();
  success("Useful data extracted from raw storage to baked storage");
};

extractFromRawToBakedStorage();

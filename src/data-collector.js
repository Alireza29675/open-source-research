const fetch = require("node-fetch");
const { fail } = require("./logger");

const getRepo = async (username, page) => {
  const URL = `https://api.github.com/users/${username}/repos?page=${page}`;
  const response = await fetch(URL);
  return await response.json();
};

const getAllRepos = async (username, fromPage = 0) => {
  const allRepos = [];
  let currentPage = fromPage;
  let fetchedRepos = [];
  do {
    try {
      fetchedRepos = await getRepo(username, currentPage++);
      fetchedRepos.forEach((item) => allRepos.push(item));
    } catch (e) {
      fetchedRepos = [];
      fail(
        `API Limitation while collecting ${username} on page ${currentPage}`
      );
    }
  } while (fetchedRepos.length > 0);
  return allRepos;
};

module.exports = {
  getAllRepos,
};

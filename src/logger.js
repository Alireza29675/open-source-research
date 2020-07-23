const chalk = require("chalk");

function notice(message) {
  console.log(chalk`{bgBlue.black  NOTICE } ${message}`);
}

function success(message) {
  console.log(chalk`{bgGreen.black  SUCCESS } ${message}`);
}

function warn(message) {
  console.log(chalk`{bgYellow.black  WARN } ${message}`);
}

function fail(message) {
  console.log(chalk`{bgRed.black  FAIL } ${message}`);
}

module.exports = {
  notice,
  success,
  warn,
  fail,
};

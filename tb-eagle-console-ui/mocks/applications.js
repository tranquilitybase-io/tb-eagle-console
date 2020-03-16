const { range, randomChoice } = require('./utils');

module.exports = range(1, 10).map(index => {
  return {
    id: index,
    name: randomChoice(['Placeholder', 'Great App', 'Other App']),
    env: randomChoice(['PROD', 'POC', 'DEV', 'UAT']),
    status: randomChoice(['Active', 'Inactive']),
    description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `
  };
});

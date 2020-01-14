const data = require('./db.json');
const deployements = require('./deployments');

module.exports = () => {
  data.deployements = deployements;

  return data;
};

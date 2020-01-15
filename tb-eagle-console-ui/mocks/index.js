const data = require('./db.json');
const deployments = require('./deployments');

module.exports = () => {
  data.deployments = deployments;

  return data;
};

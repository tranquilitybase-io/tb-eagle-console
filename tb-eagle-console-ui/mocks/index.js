const data = require('./db.json');
const applications = require('./applications');

module.exports = () => {
  data.applications = applications;

  return data;
};

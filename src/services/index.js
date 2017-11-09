const mtravels = require('./mtravels/mtravels.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(mtravels);
};

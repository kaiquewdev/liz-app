// Initializes the `mtravels` service on path `/mtravels`
const createService = require('feathers-memory');
const hooks = require('./mtravels.hooks');
const filters = require('./mtravels.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'mtravels',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/mtravels', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('mtravels');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};

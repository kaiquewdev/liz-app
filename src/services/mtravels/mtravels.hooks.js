

const distancePrediction = require('../../hooks/distance-prediction');

const distanceLimits = require('../../hooks/distance-limits');

const distanceEmpty = require('../../hooks/distance-empty');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [distancePrediction()],
    update: [distancePrediction()],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [distanceLimits(), distanceEmpty()],
    update: [distanceLimits(), distanceEmpty()],
    patch: [],
    remove: []
  }
};

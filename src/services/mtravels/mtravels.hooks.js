

const distancePrediction = require('../../hooks/distance-prediction');

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
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

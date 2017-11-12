// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const ndarray = require('ndarray');
const Model = require('keras-js').Model;

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function distancePrediction (hook,next) {
    next = next || function () {};
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    const model = new Model({
      filepaths: {
        model: __dirname + '/../../private/models/travel-price.json',
        weights: __dirname + '/../../private/models/travel-price_weights.buf',
        metadata: __dirname + '/../../private/models/travel-price_metadata.json',
      },
      filesystem: true
    });
    const c = 10, v = 4;
    const reachLine = Math.pow(c,v);
    if (hook.data.distance === undefined) hook.data.distance = 0;
    if (hook.data.distance > reachLine) hook.data.distance = reachLine;
    if (hook.data.qty === undefined) hook.data.qty = 1;
    if (hook.data.qty > 100) hook.data.qty = 100;
    const d = hook.data.distance;
    const distance = parseFloat(d,c);
    const dim = ndarray([distance]);
    model
      .ready()
      .then(() => {
        const inputData = {
          'input': new Float32Array(dim.data)
        };
        return model.predict(inputData);
      })
      .then(outputData => {
        hook.data.price = outputData['output']['0'] * hook.data.qty;
        next();
      })
      .catch(err => next(err));
    return Promise.resolve(hook);
  };
};

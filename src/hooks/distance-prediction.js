// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const ndarray = require('ndarray');
const Model = require('keras-js').Model;

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function distancePrediction (hook,next) {
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
    console.log(hook.data);
    const distance = parseFloat(hook.data.distance,10);
    const dim = ndarray([distance]);
    console.log(`Input data: ${dim.data} km`);
    model
      .ready()
      .then(() => {
        const inputData = {
          'input': new Float32Array(dim.data)
        };
        return model.predict(inputData);
      })
      .then(outputData => {
        console.log(outputData);
        hook.data.price = outputData["output"]["0"];
        next();
      })
      .catch(err => next(err));
    return Promise.resolve(hook);
  };
};

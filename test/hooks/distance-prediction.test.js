const assert = require('assert');
const distancePrediction = require('../../src/hooks/distance-prediction');

describe('\'distance-prediction\' hook', () => {
  it('runs the hook', () => {
    // A mock hook object
    const mock = {data:{distance:100}};
    // Initialize our hook with no options
    const hook = distancePrediction();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
      assert.equal(result.price,32.54886245727539);
    });
  });
});

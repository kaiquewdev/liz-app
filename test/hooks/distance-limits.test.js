const assert = require('assert');
const distanceLimits = require('../../src/hooks/distance-limits');

describe('\'distance-limits\' hook', () => {
  it('runs the hook', () => {
    // A mock hook object
    const tailLimit = Math.pow(10,4);
    const mock = {data:{distance:tailLimit}};
    // Initialize our hook with no options
    const hook = distanceLimits();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });
});

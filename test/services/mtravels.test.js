const assert = require('assert');
const app = require('../../src/app');

describe('\'mtravels\' service', () => {
  it('registered the service', () => {
    const service = app.service('mtravels');

    assert.ok(service, 'Registered the service');
  });
});

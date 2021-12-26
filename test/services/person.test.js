const app = require('../../src/app');

describe('\'person\' service', () => {
  it('registered the service', () => {
    const service = app.service('person');
    expect(service).toBeTruthy();
  });
});

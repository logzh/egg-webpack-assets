'use strict';

const mock = require('egg-mock');
const assert = require('assert');

describe('test/assets.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/assets-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET assets', async () => {
    const res = app.assets;
    assert(res && res.manifest.js === '/static/build/manifest.js');
    assert(res && res.test.js === '/static/build/test.js');
    assert(res && res.test.css === '/static/build/test.css');
  });

  it('should GET assets', async () => {
    const res = app.locals.assets;
    assert(res && res.manifest.js === '/static/build/manifest.js');
    assert(res && res.test.js === '/static/build/test.js');
    assert(res && res.test.css === '/static/build/test.css');
  });
});

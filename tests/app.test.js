const request = require('supertest');
const app = require('../lib/app');

describe('application routes', () => {
  it('returns correct content from index.html', () => {
    return request(app)
      .get('/index.html')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('Index'));
      });
  });
});
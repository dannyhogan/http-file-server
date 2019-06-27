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

  it('returns 404 not found if path doesnt exist', () => {
    return request(app)
      .get('/test.html')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('Page not found.'))
        expect(res.statusCode).toEqual(404);
      });
  });
});
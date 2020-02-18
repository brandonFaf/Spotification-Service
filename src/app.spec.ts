import supertest from 'supertest';
// Link to your server file
import app from './app';

const request = supertest(app);

describe('app', () => {
  it('responds with a not found message', async (done) => {
    const response = await request.get('/what-is-this-even');

    expect(response.status).toBe(404);
    done();
  });
});
describe('api calls', () => {
  it('gets the test endpoint', async (done) => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Here is my api 🦄🌈✨👋🌎🌍🌏✨🌈🦄');
    done();
  });
});

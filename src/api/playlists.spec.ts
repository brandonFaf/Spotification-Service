import supertest from 'supertest';
// Link to your server file
import app from '../app';

const request = supertest(app);

describe('playlists', () => {
  describe('api calls', () => {
    it('gets the test endpoint', async (done) => {
      const response = await request.get('/api/v1/playlists');
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('API - 👋🌎🌍🌏');
      done();
    });
  });
});

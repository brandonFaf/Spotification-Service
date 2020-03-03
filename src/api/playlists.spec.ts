import supertest from 'supertest';
import { PlaylistData } from '../data/__mocks__/playlist';
// Link to your server file
import app from '../app';

jest.mock('../data/playlist.ts');
const request = supertest(app);

describe('playlists', () => {
  describe('api calls', () => {
    it('gets the test endpoint', async (done) => {
      const response = await request.get('/api/v1/playlists');
      expect(response.status).toBe(200);
      expect(response.body).toStrictEqual([PlaylistData[0]]);
      done();
    });
  });
});

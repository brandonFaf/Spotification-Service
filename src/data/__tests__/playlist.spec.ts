import nock from 'nock';
import { AllPlaylistsResponse, getAllPlaylists } from '../playlist';

const playlistData: AllPlaylistsResponse = {
  allPlaylists: [{ name: 'name', spotifyId: 'spotifyId', snapshotId: 'snapshotId', id: '1' }],
};

describe('playlists', () => {
  describe('api calls', () => {
    it('gets the test endpoint', async (done) => {
      const scope = nock('http://localhost:3000')
        .post('/admin/api', (body) => {
          return body.query.includes('allPlaylists');
        })
        .reply(200, { data: playlistData });
      const updatedPlaylist = await getAllPlaylists();
      expect(updatedPlaylist).toEqual(playlistData.allPlaylists);
      expect(scope.isDone()).toBe(true);
      done();
    });
  });
});

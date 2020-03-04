import nock from 'nock';
import PlaylistHandler, { AllPlaylistsResponse } from '../PlaylistHandler';

jest.mock('../SpotifyHandler.ts');
const playlistData: AllPlaylistsResponse = {
  allPlaylists: [
    { name: 'name', spotifyId: '1', snapshotId: 'snapshotId', id: '1' },
    { name: 'name2', spotifyId: '2', snapshotId: 'snapshotId2', id: '2' },
  ],
};

describe('playlists', () => {
  describe('graphQL calls', () => {
    it('gets a list of playlists', async (done) => {
      const scope = nock('http://localhost:3000')
        .post('/admin/api', (body) => {
          return body.query.includes('allPlaylists');
        })
        .reply(200, { data: playlistData });
      const updatedPlaylist = await new PlaylistHandler().getAllPlaylists();
      expect(updatedPlaylist).toEqual(playlistData.allPlaylists);
      expect(scope.isDone()).toBe(true);
      done();
    });
  });
  describe('find playlist difference logic', () => {
    it('checks if the snapshotId is the same', async (done) => {
      const pc = new PlaylistHandler();
      const isTheSame = await pc.checkPlaylist(playlistData.allPlaylists[0]);
      expect(isTheSame).toBe(true);

      const isTheSame2 = await pc.checkPlaylist(playlistData.allPlaylists[1]);
      expect(isTheSame2).toBe(false);
      done();
    });
  });
});

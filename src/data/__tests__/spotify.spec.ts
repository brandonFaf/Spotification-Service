import nock from 'nock';
import { SpotifyPlaylist } from '../../types/index';
import SpotifyHandler from '../SpotifyHandler';

const playlistData: SpotifyPlaylist[] = [
  { name: 'name', snapshotId: 'snapshotId', id: '1' },
  { name: 'name2', snapshotId: 'snapshotId2', id: '2' },
];

describe('spotify', () => {
  describe('graphQL calls', () => {
    it('fetches spotify playlists', async (done) => {
      const scope = nock('http://localhost:3000')
        .post('/admin/api', (body) => {
          return body.variables.playlistId === '1';
        })
        .reply(200, { data: { getPlaylistFromSpotify: playlistData[0] } });
      const plist = await new SpotifyHandler().getPlaylistFromSpotify(playlistData[0].id);
      expect(plist).toEqual(playlistData[0]);
      expect(scope.isDone()).toBe(true);
      done();
    });
  });
});

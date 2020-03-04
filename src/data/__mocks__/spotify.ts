import { ISpotifyCaller } from '../spotify';
import { SpotifyPlaylist } from '../../types';

const playlistData: SpotifyPlaylist[] = [
  {
    id: '1',
    name: 'playlist',
    snapshotId: 'snapshotId',
  },
  {
    id: '2',
    name: 'playlist',
    snapshotId: 'snapshotId',
  },
];
class MockSpotifyCaller implements ISpotifyCaller {
  getPlaylistFromSpotify = (playlistId: string): Promise<SpotifyPlaylist> => {
    return new Promise<SpotifyPlaylist>((resolve) => {
      process.nextTick(() => {
        resolve(playlistData.find((p) => p.id === playlistId) || playlistData[0]);
      });
    });
  };
}
export default MockSpotifyCaller;

import { IPlaylistHandler } from '../PlaylistHandler';
import { Playlist } from '../../types';

export const PlaylistData: Playlist[] = [
  { name: 'playlist', id: '1', snapshotId: 'snapshotId', spotifyId: 'spotifyId' },
];
class MockPlaylistHandler implements IPlaylistHandler {
  getAllPlaylists = async (): Promise<Playlist[]> => PlaylistData;

  checkPlaylist = (): Promise<boolean> => {
    return new Promise((resolve) => resolve(true));
  };
}
export default MockPlaylistHandler;

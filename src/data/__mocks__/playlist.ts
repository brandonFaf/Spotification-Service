import { Playlist } from '../../types';

export const PlaylistData: Playlist[] = [
  { name: 'playlist', id: '1', snapshotId: 'snapshotId', spotifyId: 'spotifyId' },
];

export const getAllPlaylists = async (): Promise<Playlist[]> => PlaylistData;
export const checkPlaylist = (): void => {
  return undefined;
};

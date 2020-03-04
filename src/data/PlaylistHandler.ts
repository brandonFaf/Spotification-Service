import { Playlist } from '../types/index';
import client from '../helper/graphQLClient';

import SpotifyHandler from './SpotifyHandler';

export type AllPlaylistsResponse = {
  allPlaylists: Playlist[];
};

export interface IPlaylistHandler {
  getAllPlaylists: () => Promise<Playlist[]>;
  checkPlaylist: (playlist: Playlist) => Promise<boolean>;
}
class PlaylistHandler implements IPlaylistHandler {
  getAllPlaylists = async (): Promise<Playlist[]> => {
    const query = `query getPlaylists {
  allPlaylists {
    name
    snapshotId
    spotifyId
    lastUpdated
    users{
      name
      phoneNumber
    }
  }
}`;
    const { allPlaylists } = await client.request<AllPlaylistsResponse>(query);
    return allPlaylists;
  };

  checkPlaylist = async (playlist: Playlist): Promise<boolean> => {
    const updatedPlaylist = await new SpotifyHandler().getPlaylistFromSpotify(playlist.spotifyId);
    if (updatedPlaylist.snapshotId !== playlist.snapshotId) {
      return false;
      // const newTracks = getNewTracks(playlist.trackInfo, updatedTracks.data.items);
      // console.log('newTracks:', newTracks);
      // if (newTracks && newTracks.length > 0) {
      //   send(newTracks, playlist.name);
      // }
      // const updateDoc = {
      //   snapshot_id: updatedPlaylist.snapshot_id,
      //   trackInfo: updatedTracks.data.items,
      // };
      // updateTracks(playlist.id, updateDoc).catch((e) => {
      //   console.log('problem updating DB: ', e);
      // });
    }
    return true;
  };
  // const diffPlaylists = (old, current) => {
  //   const newTracks = current.filter((t) => !old.find((o) => o.track.id === t.track.id));
  //   return newTracks;
  // };
}
export default PlaylistHandler;

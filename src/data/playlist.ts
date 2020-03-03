import { Playlist } from '../types/index';
import client from '../helper/graphQLClient';

import getPlaylistFromSpotify from './spotify';

export interface AllPlaylistsResponse {
  allPlaylists: Playlist[];
}

export const getAllPlaylists = async (): Promise<Playlist[]> => {
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
export const checkPlaylist = async (playlist: Playlist): Promise<void> => {
  const updatedPlaylist = await getPlaylistFromSpotify(playlist.spotifyId);
  if (updatedPlaylist.snapshotId !== playlist.snapshotId) {
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
};
// const diffPlaylists = (old, current) => {
//   const newTracks = current.filter((t) => !old.find((o) => o.track.id === t.track.id));
//   return newTracks;
// };

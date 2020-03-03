import { SpotifyPlaylist } from '../types';
import client from '../helper/graphQLClient';

const getPlaylistFromSpotify = async (playlistId: string): Promise<SpotifyPlaylist> => {
  const query = `query getPlaylistInfo($playlistId:ID){
  getPlaylistFromSpotify(id:$playlistId){
    name
    collaborative
    tracks{
      items{
        added_at
        track{
          id
        }
      }
    }
  }
}`;
  const data = await client.request<SpotifyPlaylist>(query, { playlistId });
  return data;
};
export default getPlaylistFromSpotify;

import { SpotifyPlaylist } from '../types';
import client from '../helper/graphQLClient';

export interface ISpotifyHandler {
  getPlaylistFromSpotify: (playlistId: string) => Promise<SpotifyPlaylist>;
}
type GetPlaylistFromSpotifyResponse = {
  getPlaylistFromSpotify: SpotifyPlaylist;
};
class SpotifyHandler implements ISpotifyHandler {
  public getPlaylistFromSpotify = async (playlistId: string): Promise<SpotifyPlaylist> => {
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
    const { getPlaylistFromSpotify: data } = await client.request<GetPlaylistFromSpotifyResponse>(
      query,
      {
        playlistId,
      },
    );
    return data;
  };
}
export default SpotifyHandler;

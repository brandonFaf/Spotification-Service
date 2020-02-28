import client from '../helper/graphQLClient';

const getPlaylistsForUser = async (): Promise<void> => {
  const query = `query getAdmins {
  allAdmins {
    name
  }
}`;
  const data = await client.request(query);
  return data;
};
export default getPlaylistsForUser;

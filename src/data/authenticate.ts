import client from '../helper/graphQLClient';

const authenticate = async (): Promise<void> => {
  const query = `mutation authenticate{
  authenticateAdminWithPassword(
    email: "${process.env.KEYSTONE_ADMIN_EMAIL}"
    password: "${process.env.KEYSTONE_ADMIN_PASSWORD}"
  ) {
    token
    item{
      name
    }
  }
}`;

  await client.request(query);
};
export default authenticate;

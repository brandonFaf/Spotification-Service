import nock from 'nock';
import authenticate from '../authenticate';

describe('playlists', () => {
  describe('api calls', () => {
    it('gets the test endpoint', async (done) => {
      const KEYSTONE_ADMIN_EMAIL = 'KEYSTONE_ADMIN_EMAIL';
      const KEYSTONE_ADMIN_PASSWORD = 'KEYSTONE_ADMIN_PASSWORD';
      process.env.KEYSTONE_ADMIN_EMAIL = KEYSTONE_ADMIN_EMAIL;
      process.env.KEYSTONE_ADMIN_PASSWORD = KEYSTONE_ADMIN_PASSWORD;
      const scope = nock('http://localhost:3000')
        .post('/admin/api', (body) => {
          return (
            body.query.includes(KEYSTONE_ADMIN_EMAIL) &&
            body.query.includes(KEYSTONE_ADMIN_PASSWORD)
          );
        })
        .reply(200, { data: { authenticateAdminWithPassword: { token: 'token' } } });
      await authenticate();
      expect(scope.isDone()).toBe(true);
      done();
    });
  });
});

import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(process.env.APIURL ?? 'http://localhost:3000/admin/api');
export default client;

declare module 'fetch-cookie/node-fetch';
declare namespace NodeJS {
  interface Global {
    fetch: unknown;
  }
}

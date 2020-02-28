import express from 'express';
import getPlaylistsForUser from '../data/playlist';
// import authenticate from '../data/authenticate';
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */

// import {
//   getPlaylistsForUser,
//   createPlaylist,
//   checkForPlaylist,
//   addUserToPlaylist,
//   removeUserFromPlaylist,
//   checkPlaylist,
// } from '../data/playlist';
// import { getPlaylistFromSpotify } from '../data/spotify';
// import { addPlaylistToUser, removePlaylistFromUser, getPlaylistIdsForUser } from '../data/user';

const router = express.Router();

router.get('/', (_, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

// router.get('/:username', async (req, res) => {
//   const { username } = req.params;
//   const playlists = await getPlaylistIdsForUser(username);
//   console.log('playlists:', playlists[0]);
//   res.status(200).json({ playlists });
// });
// router.post('/:username/:id', async (req, res) => {
//   const { username, id } = req.params;
//   await addPlaylistToUser(username, id);
//   const playlistExists = await checkForPlaylist(id);
//   if (!playlistExists) {
//     await createPlaylist(id, username, req).catch((e) => console.log(e));
//   } else {
//     await addUserToPlaylist(username, id);
//   }

//   res.status(201).send('Created');
// });
// router.delete('/:username/:id', async (req, res) => {
//   const { username, id } = req.params;
//   await removePlaylistFromUser(username, id).catch((e) => console.log(e));
//   await removeUserFromPlaylist(username, id).catch((e) => console.log(e));
//   res.status(202).send('Deleted');
// });
router.get('/nonAuth', async (_, res) => {
  // const { username } = req.params;
  // const playlists = await getPlaylistsForUser();
  try {
    const data = await getPlaylistsForUser();
    res.json(data);
  } catch (err) {
    res.json(err);
  }
  // console.log(super_access_token);
  // await Promise.all(playlists.map(checkPlaylist));
});

// router.get('/', async (req, res) => {
//   const result = await getPlaylistFromSpotify('1xxWVYsizT20Mi1oxcrDZZ');
//   console.log(result);
//   res.json(['😀', '😳', '🙄']);
// });

export default router;

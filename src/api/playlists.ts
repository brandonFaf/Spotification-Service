import express from 'express';
import { getAllPlaylists } from '../data/playlist';
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
router.get('/', async (_, res) => {
  const data = await getAllPlaylists();
  res.json(data);
});

export default router;

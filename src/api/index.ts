import express from 'express';
import playlists from './playlists';

const router = express.Router();

router.use('/playlists', playlists);

export default router;

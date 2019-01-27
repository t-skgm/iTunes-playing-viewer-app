import * as express from 'express'
import { getITunesStatusJXA } from '@/services/jxa/iTunes'
import { ApiPlayingRes } from '@/types'

const router = express.Router();

router.get('/', (_req, res) => res.json({ok: true}));

router.get('/playing', async (_req, res) => {
  try {
    const resJson: ApiPlayingRes = await getITunesStatusJXA()
    res.json(resJson).status(200)
  } catch (err) {
    console.log(err)
    res.json({ error: JSON.stringify(err) }).status(400)
  }
});

export default router

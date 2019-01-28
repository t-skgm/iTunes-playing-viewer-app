import * as express from 'express'
import * as fs from 'fs'
import * as path from 'path'
import { getITunesStatusJXA, getAlbumArtTdtaStrJXA, TrackStatus } from '@/services/jxa/iTunes'
import { helpers } from '@/services/jxa/helpers'
import { consts } from '@/consts'
import { ApiPlayingRes } from '@/types'

const fsProm = fs.promises
const router = express.Router()

const buildArtworkPath = (track: TrackStatus) => path.resolve(`${consts.artworkDir}/${track.artist}-${track.title}.jpg`)

const pathExists = async (pathStr: string) => {
  try {
    await fsProm.access(pathStr)
    return true
  } catch {
    return false
  }
}

const saveCurrentArtwork = async (filePath: string) => {
  const tdtaStr = await getAlbumArtTdtaStrJXA()
  const buf = helpers.tdtaToBuffer(tdtaStr)
  return fsProm.writeFile(filePath, buf)
}

router.get('/', (_req, res) => res.json({ ok: true }))

router.get('/playing', async (_req, res) => {
  try {
    const resJson: ApiPlayingRes = await getITunesStatusJXA()
    if (resJson.track) {
      const filePath = buildArtworkPath(resJson.track)
      const exists = await pathExists(filePath)
      if (!exists) await saveCurrentArtwork(filePath)
    }
    res.json(resJson).status(200)
  } catch (err) {
    console.log(err)
    res.json({ error: JSON.stringify(err) }).status(400)
  }
})

export default router

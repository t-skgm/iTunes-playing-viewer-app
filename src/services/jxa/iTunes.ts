import '@jxa/global-type'
import { run } from '@jxa/run'
import { ITunes } from './defs/iTunes'

export interface TrackStatus {
  title: string
  trackNumber: number
  albumArtist: string
  artist: string
  album: string
  releaseDate?: Date
  year?: number
  duration: number
  time: string
  comment: string
  albumArtStr?: string
}

export interface PlaylistStatus {
  title: string
  duration: number
  time: string
}

export interface ITunesStatus {
  track?: TrackStatus
  playlist?: PlaylistStatus
  error?: any
}

export const getITunesStatusJXA = (withArtworkStr: boolean = false) =>
  run<ITunesStatus | {}>(withArtworkStrArg => {
    const buildTrackStatusObj = (track: ITunes.Track): TrackStatus => ({
      title: track.name() || '',
      trackNumber: track.trackNumber(),
      albumArtist: track.albumArtist() || '',
      artist: track.artist() || '',
      album: track.album() || '',
      releaseDate: track.releaseDate(),
      year: track.year(),
      duration: track.duration(),
      time: track.time(),
      comment: track.comment(),
      albumArtStr: withArtworkStrArg ? track.artworks()[0].rawData() : undefined
    })

    const buildPlStatusObj = (pl: ITunes.Playlist): PlaylistStatus => ({
      title: pl.name() || '',
      duration: pl.duration(),
      time: pl.time()
    })

    try {
      const iTunes = Application<ITunes.Application>('iTunes')
      const track = iTunes.currentTrack()
      const pl = iTunes.currentPlaylist()

      const iTunesStatus: ITunesStatus = {
        track: buildTrackStatusObj(track),
        playlist: buildPlStatusObj(pl)
      }
      return iTunesStatus
    } catch (e) {
      console.log(e)
      return {}
    }
  }, withArtworkStr)

export const getAlbumArtTdtaStrJXA = () =>
  run<string>(() => {
    const iTunes = Application<ITunes.Application>('iTunes')
    const track = iTunes.currentTrack()
    try {
      const albumArtStr = track.artworks()[0].rawData()
      return albumArtStr
    } catch (e) {
      console.log(e)
      return 'no artwork'
    }
  })

/*
export const getAlbumArtTdtaStrJXA = () =>
  run<string>(() => {
    const app = Application.currentApplication()
    const fs = require('fs')
    app.includeStandardAdditions = true

    const helpers = {
      doShellScript: (cmd: string) => 
        app.doShellScript(cmd, {
          administratorPrivileges: false,
          withPrompt: '',
          alteringLineEndings: false
        }),
      ls: (path: string) => {
        try {
          return helpers.doShellScript(`ls ${path}`)
        } catch {
          return false
        }
      },
      buildArtworkPath: (track: ITunes.Track) => {
        const pwd = helpers.doShellScript('pwd')
        return `${pwd}/src/static/images/artworks/${track.artist()}-${track.name()}.jpg`
      },
      tdtaToBuffer: (tdtaStr: string) => {
        const hexStr = tdtaStr.replace(/^\'tdta\'\(\$|\$\)$/g, '')
        const byteAry = helpers.hexStrings2byteAry(hexStr)
        return new Uint8Array(byteAry)
      },
      hexStrings2byteAry: (str: string) =>
        helpers.splitByLength(str, 2).map(h => parseInt(h, 16)),
      splitByLength: (str: string, length: number) =>
        str.split(new RegExp(`(.{${length}})`)).filter(e => e) // 空文字削除
    }

    try {
      const iTunes = Application<ITunes.Application>('iTunes')
      const track = iTunes.currentTrack()
      const path = helpers.buildArtworkPath(track)
      const exists = helpers.ls(path)

      if(!exists) {
        const albumArtStr = track.artworks()[0].rawData()
        const buf = helpers.tdtaToBuffer(albumArtStr)
        fs.writeFileSync('hoge.jpg', buf)
        return true
      } else {
        return false
      }  
    } catch (e) {
      console.log(e)
      return 'no artwork'
    }
  })
*/

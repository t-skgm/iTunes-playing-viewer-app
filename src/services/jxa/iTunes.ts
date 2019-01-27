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
  track: TrackStatus
  playlist: PlaylistStatus
}

export const getITunesStatusJXA = (withArtworkStr: boolean = false) =>
  run<ITunesStatus>(withArtworkStr => {
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
      albumArtStr: withArtworkStr ? track.artworks()[0].rawData() : undefined
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
      return ''
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

import { ITunesStatus } from '@/services/jxa/iTunes'

export type ApiPlayingRes = ITunesStatus

export interface TrackInfoItem {
  label: string
  value?: string | number
}

export interface ErrorRes {
  error: string
}

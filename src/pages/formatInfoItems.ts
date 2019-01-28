import { TrackStatus } from '@/services/jxa/iTunes'
import { TrackInfoItem } from '@/types'
import { parseJSONroughly } from '@/utils'

export const formatInfoItems = (track: TrackStatus): TrackInfoItem[] => {
  const additional = parseJSONroughly(track.comment)
  const items = [
    {
      label: 'Title',
      value: track.title
    },
    {
      label: 'Artist',
      value: track.artist
    },
    {
      label: 'Album',
      value: track.album
    },
    {
      label: 'Year',
      value: track.year || '?'
    }
  ]
  if (additional.label) {
    items.push({
      label: 'Label',
      value: additional.label
    })
  }
  return items
}

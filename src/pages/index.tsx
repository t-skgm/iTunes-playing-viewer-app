import * as React from 'react'
import { withRouter, WithRouterProps } from 'next/router'
import { client } from '@/services/client'
import { TrackStatus } from '@/services/jxa/iTunes'
import { ApiPlayingRes, TrackInfoItem } from '@/types'
import { IndexScreen } from '@/screens/IndexScreen'
import { consts } from '@/consts'

const getAdditionalInfoFromComment = (comment: string): any => {
  try {
    return JSON.parse(comment)
  } catch (error) {
    console.log('JSON.parse error', error)
    console.log('[body]', comment)
    return {}
  }
}

const formatInfoItems = (track: TrackStatus): TrackInfoItem[] => {
  const additional = getAdditionalInfoFromComment(track.comment)
  const items =  [{
    label: 'Title',
    value: track.title
  }, {
    label: 'Artist',
    value: track.artist
  }, {
    label: 'Album',
    value: track.album
  }, {
    label: 'Year',
    value: track.year || '?'
  }]
  if (additional.label) {
    items.push({
      label: 'Label',
      value: additional.label
    })
  }
  return items
}

const buildArtworkPath = (track: TrackStatus): string =>
  `${consts.artworkServerDir}/${track.artist}-${track.title}.jpg`

class IndexPage extends React.Component<ApiPlayingRes & WithRouterProps> {
  interval: NodeJS.Timeout | null = null
  
  static getInitialProps = async () => {
    try {
      const data = await client.getPlaying()
      return data
    } catch (error) {
      return null
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.props.router) this.props.router.push('/')
    }, consts.updateRateMs);
  }

  componentWillUnmount() {
    clearInterval(this.interval!);
  }

  shouldComponentUpdate(nextProps: ApiPlayingRes) {
    if (!this.props.track || !nextProps.track) return true
    if (this.props.track.title === nextProps.track.title &&
        this.props.track.album === nextProps.track.album) return false
    return true
  }

  render() {
    const { track, playlist } = this.props
    const passProps = {
      title: playlist ? playlist.title : undefined,
      items: track ? formatInfoItems(track) : [],
      artworkPath: track ? buildArtworkPath(track) : undefined
    }
    return (<IndexScreen {...passProps} />)
  }  
}

export default withRouter(IndexPage)

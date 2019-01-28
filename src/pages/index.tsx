import * as React from 'react'
import { withRouter, WithRouterProps } from 'next/router'
import { client } from '@/services/client'
import { TrackStatus } from '@/services/jxa/iTunes'
import { ApiPlayingRes } from '@/types'
import { IndexScreen } from '@/screens/IndexScreen'
import { consts } from '@/consts'
import { formatInfoItems } from './formatInfoItems'

const buildArtworkPath = (track: TrackStatus): string => `${consts.artworkServerDir}/${track.artist}-${track.title}.jpg`

class IndexPage extends React.Component<ApiPlayingRes & WithRouterProps> {
  static getInitialProps = async () => {
    try {
      const data = await client.getPlaying()
      return data
    } catch (error) {
      return null
    }
  }
  interval: NodeJS.Timeout | null = null

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.props.router) this.props.router.push('/')
    }, consts.updateRateMs)
  }

  componentWillUnmount() {
    clearInterval(this.interval!)
  }

  shouldComponentUpdate(nextProps: ApiPlayingRes) {
    if (!this.props.track || !nextProps.track) return true
    if (this.props.track.title === nextProps.track.title && this.props.track.album === nextProps.track.album) {
      return false
    }
    return true
  }

  render() {
    const { track, playlist } = this.props
    const passProps = {
      title: playlist ? playlist.title : undefined,
      items: track ? formatInfoItems(track) : [],
      artworkPath: track ? buildArtworkPath(track) : undefined
    }
    return <IndexScreen {...passProps} />
  }
}

export default withRouter(IndexPage)

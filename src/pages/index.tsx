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

const formatInfoItems = (status: TrackStatus): TrackInfoItem[] => {
  const additional = getAdditionalInfoFromComment(status.comment)
  const items =  [{
    label: 'Title',
    value: status.title
  }, {
    label: 'Artist',
    value: status.artist
  }, {
    label: 'Album',
    value: status.album
  }, {
    label: 'Year',
    value: status.year || '?'
  }]
  if (additional.label) {
    items.push({
      label: 'Label',
      value: additional.label
    })
  }
  return items
}

class IndexPage extends React.Component<ApiPlayingRes & WithRouterProps> {
  interval: NodeJS.Timeout | null = null
  
  static getInitialProps = async () => {
    const data = await client.getPlaying()
    return data
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
    if (this.props.track.title === nextProps.track.title &&
        this.props.track.album === nextProps.track.album) return false
    return true
  }

  render() {
    const { track, playlist } = this.props
    const passProps = {
      title: playlist.title,
      items: formatInfoItems(track)
    }
    return (<IndexScreen {...passProps} />)
  }  
}

export default withRouter(IndexPage)

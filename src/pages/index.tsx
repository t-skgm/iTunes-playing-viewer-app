import * as React from 'react'
import { NextComponentType } from 'next'
import Link from 'next/link'
import { Layout, TrackInfoArea } from '@/components'
import styled from '@emotion/styled'
import { client } from '@/services/client'
import { consts } from '@/consts'
import { ApiPlayingRes, TrackInfoItem } from '@/types'
import { TrackStatus } from '@/services/jxa/iTunes'

const bgImageWidth = consts.window.width
const bgImageRedLineRate = 0.15
const artworkSize = 330

const Wrapper = styled.div`
  width: ${bgImageWidth}px;
  height: ${consts.window.height}px;
  padding: 1rem;
  background-image: url('/static/images/note.jpg');
  background-size: ${bgImageWidth}px;
  background-position: 0 bottom;
`

const Title = styled.h1`
  margin: 0;
  padding-left: ${bgImageWidth * bgImageRedLineRate}px;
  padding-bottom: 1rem;
  font-family: 'TsukuARdGothic-Regular', 'American Typewriter', sans-serif;
`

const Detail = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`

const ArtworkArea = styled.div`
  width: ${artworkSize}px;
  height: ${artworkSize}px;
  background-color: #ddd;
`

const Artwork = styled.img`
  width: ${artworkSize}px;
  height: ${artworkSize}px;
`

const formatTrack = (status: TrackStatus): TrackInfoItem[] => {
  return [{
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
    value: status.year
  }]
}

const IndexPage: NextComponentType<ApiPlayingRes> = ({ track, playlist }) => (
  <Layout title="Title">
    <Wrapper>
      <Title>{playlist.title}</Title>
      <Detail>
        <ArtworkArea>
          <Artwork src="/static/images/placeholder-song.png" />
        </ArtworkArea>
        <TrackInfoArea items={formatTrack(track)} />
      </Detail>
    </Wrapper>
  </Layout>
)

IndexPage.getInitialProps = async () => {
  const data = await client.getPlaying()
  return data
}

export default IndexPage;

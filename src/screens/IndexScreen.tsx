import * as React from 'react'
import { NextComponentType } from 'next'
import styled from '@emotion/styled'
import { Layout, TrackInfoArea } from '@/components'
import { consts } from '@/consts'
import { TrackInfoItem } from '@/types'

const bgImageWidth = consts.window.width
const bgImageRedLineRate = 0.15
const artworkSize = 350

const Wrapper = styled.div`
  width: ${bgImageWidth}px;
  height: ${consts.window.height}px;
  padding: 1rem;
  background-image: url('/static/images/background.jpg');
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
  box-shadow: 0px 6px 13px 2px rgba(168, 168, 168, 0.6);
`

const Artwork = styled.img`
  width: ${artworkSize}px;
  height: ${artworkSize}px;
`

interface IndexScreenProps {
  title?: string
  items: TrackInfoItem[]
  artworkPath?: string
}

export const IndexScreen: NextComponentType<IndexScreenProps> = ({ items, title = '(Stop)', artworkPath }) => (
  <Layout title={title}>
    <Wrapper>
      <Title>{title}</Title>
      <Detail>
        <ArtworkArea>
          {artworkPath ? <Artwork src={artworkPath} /> : <Artwork src="/static/images/placeholder-song.png" />}
        </ArtworkArea>
        <TrackInfoArea items={items} />
      </Detail>
    </Wrapper>
  </Layout>
)

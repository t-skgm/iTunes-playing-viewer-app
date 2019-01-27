import * as React from 'react'
import styled from '@emotion/styled'
import { TrackInfoItem } from '@/types'

const linePadding = '0.7rem'

const Wrapper = styled.dl`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: ${linePadding} 0;
  margin: 0 1rem;
  background-color: rgba(255, 255, 255, 0.5);
`

const InfoTitle = styled.dt`
  flex-basis: 20%;
  padding: ${linePadding};
  padding-left: 0;
  color: #434343;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: right;
`

const InfoValue = styled.dd`
  flex-basis: 80%;
  padding: ${linePadding} 0;
  margin: 0;
  font-size: 1.1rem;
`

interface TrackInfoAreaProps {
  items: TrackInfoItem[]
}

export const TrackInfoArea: React.FC<TrackInfoAreaProps> = ({ items }) => (
  <Wrapper>
    {items.map((item, idx) => (
      <React.Fragment key={'item' + idx}>
        <InfoTitle>{item.label}:</InfoTitle>
        <InfoValue>{item.value}</InfoValue>
      </React.Fragment>
    ))}
  </Wrapper>
)
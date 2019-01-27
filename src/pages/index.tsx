import * as React from 'react'
import { NextComponentType } from 'next'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { client } from '@/services/client'
import { ApiPlayingRes } from '@/types'

const IndexPage: NextComponentType<ApiPlayingRes> = ({ track, playlist }) => (
  // <Layout title="Home | Next.js + TypeScript Example">
  // </Layout>
  <div>
    <h1>{playlist.title}</h1>
    <p>{JSON.stringify(track)}</p>
    <p>{JSON.stringify(playlist)}</p>
  </div>
)

IndexPage.getInitialProps = async () => {
  const data = await client.getPlaying()
  return data
}

export default IndexPage;

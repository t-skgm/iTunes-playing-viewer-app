import * as React from 'react'
import Head from 'next/head'
import { Global, css } from '@emotion/core'

interface Props {
  title?: string
}

export const Layout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/style/bootstrap-reboot.css" />
    </Head>
    <Global
      styles={css`
        * {
          font-family: 'TsukuARdGothic-Regular', 'American Typewriter', sans-serif;
        }

        html,
        body,
        #__next,
        #__next > div {
          height: 100%;
          margin: 0;
        }
      `}
    />
    {children}
  </div>
)

// @flow
import React from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'
import { Provider } from 'rebass'

import { theme } from './styles/theme.js'
import Main from './react/pages/Main'

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  body {
    color: #343838;
    font-family: "Open Sans";
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`

const container = document.getElementById('app')
if (container)
  render(
    <Provider theme={theme}>
      <Main />
    </Provider>,
    container
  )

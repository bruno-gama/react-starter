// @flow strict
/* eslint-disable no-console */

import * as React from 'react'

type Props = { children: React.Node }
type State = { error: boolean }

class ErrorBoundary extends React.Component<Props, State> {
  state = { error: false }

  componentDidCatch<T>(error: Error, info: T) {
    console.log('Error caught in error boundary:', error, info)
    this.setState({ error: true })
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>Something unexpected has happened</h1>
          <p>
            An error was thrown while trying to render a component, check
            console logs for more info
          </p>
        </div>
      )
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary

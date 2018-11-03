// @flow
import React from 'react'
import type { Component, ComponentType, ElementConfig } from 'react'

import { newValues } from '../../../helpers/compareObjects.js'

type State = { data: mixed, error: mixed }

type ResourceError = {}

export const withResource = <Q: {}, D: {}>(get: Q => Promise<D>) => <
  P: {},
  C: ComponentType<P>
>(
  WrappedComponent: C
) => {
  return class withResource extends React.Component<
    $Diff<
      P,
      { data: D | void, resourceError: ResourceError | void, params: Q | void }
    >,
    State
  > {
    defaultProps = { params: {} }
    state = { data: null, error: null }

    componentDidMount() {
      this.fetch()
    }

    componentDidUpdate(prevProps: P) {
      if (newValues(this.props.params, prevProps.params).length) {
        this.setState({ data: null })
        this.fetch()
      }
    }

    fetch = () => {
      get(this.props.params)
        .then(data => {
          this.setState({ data, error: null })
        })
        .catch(error => {
          this.setState({
            error: {
              status: error.response.status,
              data: error.response.data.errors,
            },
          })
        })
    }

    render() {
      const passedProps = {
        ...this.props,
        data: this.state.data,
        resourceError: this.state.error,
      }

      return <WrappedComponent {...passedProps} />
    }
  }
}

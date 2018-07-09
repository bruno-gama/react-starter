// @flow
import React from 'react'
import type { ComponentType } from 'react'

import { newValues } from '../../../helpers/compareObjects.js'

type Props = {
  params?: Object,
}

type State = { data: mixed, error: mixed }

export const withResource = (
  get: (?Object) => Promise<mixed>,
  propName: string
) => (WrappedComponent: ComponentType<Props>) => {
  return class withResource extends React.Component<Props, State> {
    static defaultProps = {
      params: {},
    }

    constructor(props: Props) {
      super(props)
      this.state = { data: null, error: null }
    }

    componentDidMount() {
      this.fetch()
    }

    componentDidUpdate(prevProps: Props) {
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
        [propName]: this.state.data,
        resourceError: this.state.error,
      }
      return <WrappedComponent {...passedProps} />
    }
  }
}

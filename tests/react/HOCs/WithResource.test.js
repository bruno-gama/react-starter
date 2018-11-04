import React from 'react'
import { mount } from 'enzyme'

import { MockChild } from '../../helpers/components.js'
import { withResource } from '../../../src/react/HOCs/withResource'

const render = Component => mount(Component)

describe('WithResource HOC', function() {
  test('renders', function() {
    const ComponentWithResource = withResource(() => Promise.resolve({}))(
      MockChild
    )

    expect(render(<ComponentWithResource />)).toBeDefined()
  })

  test('calls the resource function', function() {
    let calledParams = null
    const ComponentWithResource = withResource(params => {
      calledParams = params
      return Promise.resolve({})
    })(MockChild)

    render(<ComponentWithResource params={{ test: true }} />)

    expect(calledParams).toEqual({ test: true })
  })

  test('calls the resource function again if the params prop changes', function() {
    let called = 0
    const ComponentWithResource = withResource(() => {
      called++
      return Promise.resolve({})
    })(MockChild)

    const component = render(<ComponentWithResource params={{ test: 1 }} />)
    component.setProps({ params: { test: 2 } })
    component.setProps({ params: { test: 3 } })
    component.setProps({ params: { test: 4 } })

    expect(called).toBe(4)
  })

  test('does not call the resource function again if any other prop changes', function() {
    let called = 0
    const ComponentWithResource = withResource(() => {
      called++
      return Promise.resolve({})
    })(MockChild)

    const component = render(<ComponentWithResource params={{ test: 1 }} />)
    component.setProps({ otherProp: { test: 2 } })
    component.setProps({ otherProp: { test: 3 } })
    component.setProps({ otherProp: { test: 4 } })

    expect(called).toBe(1)
  })

  test('passes the state as a prop with the chosen name', function() {
    const ComponentWithResource = withResource(() => Promise.resolve({}))(
      MockChild
    )

    const Component = render(<ComponentWithResource />).setState({
      data: { test: 'test' },
    })
    expect(Component.find(MockChild).prop('data')).toEqual({ test: 'test' })
  })
})

import React from 'react'
import { render, cleanup, waitForDomChange } from '@testing-library/react'
import 'regenerator-runtime'

import { withResource } from './'

// eslint-disable-next-line react/prop-types
const MockChild = ({ testData }) => <div>{testData}</div>

const ComponentWithResource = withResource(
  ({ times }) =>
    Promise.resolve(`Function called with param "times" as ${times}`),
  'testData'
)(MockChild)

describe('WithResource HOC', function() {
  afterEach(cleanup)

  it('calls resource function and passes received data to enhanced component', async () => {
    const { container } = render(
      <ComponentWithResource params={{ times: 1 }} />
    )

    await waitForDomChange()
    expect(container).toHaveTextContent(
      'Function called with param "times" as 1'
    )
  })

  it('fires another request and updates the component when params prop changes', async () => {
    const { container, rerender } = render(
      <ComponentWithResource params={{ times: 1 }} />
    )

    await waitForDomChange()
    rerender(<ComponentWithResource params={{ times: 2 }} />)

    await waitForDomChange()
    expect(container).toHaveTextContent(
      'Function called with param "times" as 2'
    )
  })
})

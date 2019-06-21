import React from 'react'
import { render } from '@testing-library/react'

import Header from '../../../../src/react/components/Header'

describe.only('Header', () => {
  test('renders correctly', () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot()
  })
})

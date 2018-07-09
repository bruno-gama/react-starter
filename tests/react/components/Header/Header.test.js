import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Header from '../../../../src/react/components/Header'

describe.only('Header', () => {
  test('renders correctly', () => {
    const component = shallow(<Header />)

    expect(toJson(component)).toMatchSnapshot()
  })
})

/* global Date: true */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const RealDate = Date

Date = class extends RealDate {
  constructor() {
    super()
    return new RealDate('2018-06-25T12:00:00z')
  }
}

configure({ adapter: new Adapter() })

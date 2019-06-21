/* global Date: true */
const RealDate = Date

Date = class extends RealDate {
  constructor() {
    super()
    return new RealDate('2018-06-25T12:00:00z')
  }
}

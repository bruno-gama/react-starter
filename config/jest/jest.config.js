const path = require('path')

module.exports = {
  testRegex: '(/tests/[^(helpers|.)].*|(\\.|/)(test|spec))\\.js$',
  rootDir: path.resolve(__dirname, '../../'),
  setupFiles: ['<rootDir>/tests/helpers/setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
}

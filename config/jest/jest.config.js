const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  setupFiles: [path.resolve(__dirname, './setup.js')],
  setupFilesAfterEnv: [path.resolve(__dirname, './setupAfterEnv.js')],
}

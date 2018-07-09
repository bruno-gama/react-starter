const express = require('express')
const app = express()
const path = require('path')

const distFolder = path.resolve(__dirname, '../../dist')

app.use(express.static(distFolder))

app.get('/*', function(req, res) {
  res.sendFile(path.resolve(distFolder, 'index.html'))
})

app.listen(8080)
console.log('app is listening on http://localhost:8080')

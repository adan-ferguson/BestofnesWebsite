const log = require('fancy-log')
const express = require('express')

const directories = require('./directories')
const config = require('./config.js')

const app = express()
  .set('view engine', 'pug')
  .set('views', directories.COMPILED.VIEWS)
  .use(express.static(directories.STATIC))
  .use('/', require('./routes/public.js'))
  .use('/admin', require('./routes/admin.js'))

app.listen(config.port, () => log(`Listening on port ${config.port}.`))
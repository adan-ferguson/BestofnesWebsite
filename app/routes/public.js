const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('homepage', {title: 'Hey', message: 'Route message'})
})

router.get('/twitchredirect', (req, res) => {
  res.render('twitchredirect')
})

module.exports = router
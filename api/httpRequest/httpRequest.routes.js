const express = require('express')
const { getLocations} = require('./httpRequest.controller')

const router = express.Router()

router.get('/location',  getLocations)


module.exports = router
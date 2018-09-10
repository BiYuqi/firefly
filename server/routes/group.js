const express = require('express')
const router = express.Router()
const Group = require('../constrollers/group')

router.get('/getMyGroup', Group.getMyGroup)

module.exports = router

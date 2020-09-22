const express = require('express')
const router = express.Router()
const execute = require('../modules/execute')

router.post('/execute', function (req, res) {
    res.json(execute(req.body['code']))
})

module.exports = router

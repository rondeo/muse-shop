const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
    return res.send('you are on the admin login page')
})

module.exports = router
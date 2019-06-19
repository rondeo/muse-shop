const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
    return res.render('admin/login')
})

module.exports = router
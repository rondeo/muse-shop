const express = require('express')
let router = express.Router()

router.get('/contato', (req, res) => res.render('site/contact'))

module.exports = router;
const express = require('express')
const router = express.Router()

router.get('/about-us', (req, res) => res.render('site/about-us'))
router.get('/sobre', (req, res) => res.render('site/about-us'))

module.exports = router;

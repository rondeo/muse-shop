const express = require('express');
let router = express.Router()

router.get('/busca', (req, res) => res.render('site/search'))

module.exports = router;
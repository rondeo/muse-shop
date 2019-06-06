const express = require('express');
let router = express.Router()
const productsModel = require('../models/productsModel')

router.get('/busca', (req, res) => res.render('site/search'))

module.exports = router;
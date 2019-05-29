let homeModel = require('../models/homeModel')
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    return res.render('site/home')
    // homeModel.getHomeProducts().then((response) => {
    // })
})

module.exports = router;
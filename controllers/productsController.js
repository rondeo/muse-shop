const express = require('express')
const router = express.Router()
const productsModel = require('../models/productsModel')
const { getOne } = productsModel
router.get('/product/:id', (req, res) => {
    let { id } = req.params;
    getOne(id).then(response => {
        console.log(response)
        res.render('site/product')
    })
        .catch(err => {
            console.log(err)
            res.send('err')
        })
})
router.get('/sobre', (req, res) => res.render('site/about-us'))

module.exports = router;

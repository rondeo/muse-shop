const express = require('express')
const router = express.Router()

let productsModel = require('../models/productsModel.js')

router.get('/products', (req, res) => {
    let data = req.body ? req.body : '';

    productsModel.getAll(data).then((response) => {

        if (response) {
            return res.render('admin/products/index', { data: response })
        }
    }).catch(err => {
        console.log(err)
        return res.render('admin/products/index')
    })
})
router.post('/new-product', (req, res) => {

    let data = req.body;
    if (!data.nome && !data.valorVenda) {
        return res.send('Please verify your fields')
    }
    else {
        productsModel.newProduct(data).then((response) => {
            if (response) {
                return res.send('New product Saved')
            }
        }).catch(err => console.log(err))
    }
})
router.get('/new-product', (req, res) => {
    return res.render('admin/products/new-product')
})

module.exports = router;

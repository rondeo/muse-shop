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
router.put('/product', (req, res) => {
    let data = req.body
    productsModel.updateItem(data).then(response => {
        if (response) {
            res.send('product updated')
        }
        else {
            res.send('something get wrong, try it later')
        }

    })
})
router.delete('/product', (req, res) => {
    let data = req.body
    productsModel.delete(data).then(response => {
        if (response) {
            res.send('Product deleted')
        }
        else {
            res.send('Something went wrong, try it later')
        }
    })
})

router.get('/product/:id', (req, res) => {
    let { id } = req.params
    productsModel.getItem(id).then(response => {
        let data = response;
        if (response) {
            return res.render('admin/products/product', { data: data })
        } else {
            return res.json('nothing')
        }
    })
})
router.get('/new-product', (req, res) => {
    return res.render('admin/products/new-product')
})

module.exports = router;

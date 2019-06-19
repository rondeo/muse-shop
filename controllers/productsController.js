const express = require('express')
const router = express.Router()
const productsModel = require('../models/productsModel')
const { getOne } = productsModel


router.get('/product/:id', (req, res) => {
    let { id } = req.params;
    getOne(id).then(response => {
        let responseKeys = Object.keys(response[0])
        let product = {}
        responseKeys.map(item => {
            product[item] = response[0][item]
        })
        product = JSON.stringify(product)
        res.render('site/product', { data: product })
    })
        .catch(err => {
            console.log(err)
            res.send('err')
        })
})


router.get('/products/api/:total', (req, res) => {
    let data = {}
    data.counter = req.params.total
    if (!data.counter) {
        productsModel.getAll(data).then(response => {
            if (response.length) {
                return res.json(response)
            } else {
                let error = {
                    code: 401,
                    message: 'products not found'
                }
                return res.json(error)
            }
        })
    }
    else if (data) {
        productsModel.getFew(data).then(response => {
            if (response.length) {
                return res.json(response)
            } else {
                let error = {
                    code: 401,
                    message: 'products not found'
                }
                return res.json(error)
            }
        })
    }
    else {
        let error = {
            code: 200,
            message: 'invalid parameter'
        }
        res.json(err)
    }
})


router.get('/products/api/all/', (req, res) => {
    productsModel.getAll(data).then(response => {
        if (response.length) {
            return res.json(response)
        } else {
            let error = {
                code: 401,
                message: 'products not found'
            }
            return res.json(error)
        }
    })
})
router.get('/sobre', (req, res) => res.render('site/about-us'))

module.exports = router;

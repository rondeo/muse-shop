let homeModel = require('../models/homeModel')
const productsModel = require('../models/productsModel')
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    let data = {}
    data.counter = 6;
    productsModel.getFew(data).then(response => {
        let products = []
        if(response){
            response.map(item => {
                let product = {
                    id: item.id,
                    image: item.imagens,
                    price: item.valorVenda,
                    name: item.nome
                }
                products.push(product)
            })
        }else{
            products = null
        }
        return res.render('site/home', {data: products})
    })
    .catch( err => {
        console.log(err)
        return res.send('error page loading ')
    })
})

module.exports = router;
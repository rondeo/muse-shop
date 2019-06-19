const express = require('express');
let router = express.Router()
const productsModel = require('../models/productsModel')
const calcFrete = require('../providers/helpers')

router.get('/busca', (req, res) => {
	let data = null;

	if (req.query.terms) {
		let { terms } = req.query;
		productsModel.getLike(terms).then(response => {

			if (response.length) {

				data = JSON.stringify(response);

			}

			res.render('site/search', { data: data })
		})
	}
	else {
		res.render('site/search', { data: data })
	}
})
router.get('/api/frete/:id/:cep', (req, res) => {
	let data = {
		cep: req.params.cep,
		id: req.params.id
	}
	calcFrete(data).then(response => {
		res.json(response)
	}).catch(err => {
		res.json('0')
	})
})



module.exports = router;
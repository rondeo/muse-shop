const express = require('express')
const router = express.Router()
const usersModel = require('../models/usersModel')

router.get('/users', (req, res) => {
	usersModel.getAll().then(response => {
		let users = []	

		if(response.length){
			response.map(item => {
				let user = {
					id: item.id,
					nome: item.nome,
					cpf: item.cpf,
					email: item.email,
				}
				users.push(user)
			})
			let data = users

			res.render('admin/users/index', {data: data})
		}
		else{
			res.json('nothing found')
		}
	})
})
router.delete('/user/:id', (req, res) => {
	let {id} = req.params


	if(id){
		usersModel.delete(id).then(response => {
			res.json(response)
		})
	}
})
router.post('/users', (req, res) => res.send('you are loading the post for user'))
router.get('/new-user', (req, res) => res.render('admin/users/new-user'))


// api 

router.get('/api/users', (req, res) => {
		usersModel.getAll().then(response => {
		let users = []	

		if(response.length){
			response.map(item => {
				let user = {
					id: item.id,
					nome: item.nome,
					cpf: item.cpf,
					email: item.email,
				}
				users.push(user)
			})
			let data = users

			res.json(users)
		}
		else{
			res.json('nothing found')
		}
	})
})

module.exports = router;
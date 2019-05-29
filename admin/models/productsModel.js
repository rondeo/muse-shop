let knex = require('../../settings/db/knex')

module.exports = {
	newProduct: (data) => {
		return new Promise((resolve, reject) => {
			knex('products').insert(data).then(response => {
				resolve(response)
			}).catch(err => {
				reject(err)
			})
		});
	},
	getAll: (data) => {
		return new Promise((resolve, reject) => {
			knex('products').select('*').then(response => {
				resolve(response)
			}).catch(err => { reject(err) })
		})
	},
	updateItem: (data) => {
		return new Promise((resolve, reject) => {
			let { id } = data
			delete data.id
			knex('products').where('id', id).update(data).then(response => {
				if (response) {
					resolve(response)
				}
			}).catch(err => reject(err))
		})
	},
	getItem: (data) => {
		return new Promise((resolve, reject) => {
			knex('products').where('id', data).then(response => {
				if (response.length) {
					resolve(response)
				}
				else {
					reject('0')
				}
			}).catch(err => {
				console.log(err)
			})
		})

	},
	delete: (data) => {
		return new Promise((resolve, reject) => {
			let { id } = data
			knex('products').where('id', id).del()
				.then(res => {
					console.log(res)
					resolve(res)
				})
				.catch(err => reject(err))
		})
	}
}
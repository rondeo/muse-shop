let knex = require('../../settings/db/knex')

module.exports = {
    newProduct: (data) => { 
	    return new Promise((resolve, reject) => {
			knex('products').insert(data).then( response => {
				resolve(response)
			}).catch(err => {
				reject(err)
			})
	    });   
		},
		getAll: (data) => {
			return new Promise( ( resolve, reject ) => {
				knex('products').select('*').then(response => {
					resolve(response)
				}).catch(err => { reject(err) })
			})
		}
}
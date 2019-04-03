let knex = require('../../settings/db/knex')

module.exports = {
    newUser: (data) => { 
	    return new Promise((resolve, reject) => {
			knex('users').insert(data).then( response => {
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
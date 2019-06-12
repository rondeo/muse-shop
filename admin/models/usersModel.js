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
		getAll: (data) => new Promise( ( resolve, reject ) => {
			knex('users').select('*')
				.then(response => {
					resolve(response)
				})
				.catch(err => { reject(err) })
		}),
		delete: (data)=> new Promise( (resolve, reject)=> {
			knex('users').where('id', id).del()
				.then(response => {
					resolve(response)
				})
		})
}
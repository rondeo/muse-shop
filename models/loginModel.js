let connection = require('../settings/db/dbConnection')
let knex = require('../settings/db/knex')

module.exports = {
    verifyLogin: (data) => {
        
	    return new Promise((resolve, reject) => {
			knex('users').select('*')
				.then( response => {
					resolve(response)
				}).catch(err => {
					reject(err)
				})
	    });   
    },
}
let knex = require('../settings/db/knex')

module.exports = {
    getHomeProducts: (data) => {
        
	    return new Promise((resolve, reject) => {
			knex('products').select('*')
				.then( response => {
					resolve(response)
				}).catch(err => {
					reject(err)
				})
	    });   
    },
}
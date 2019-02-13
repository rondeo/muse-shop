let knex = require('../../settings/db/knex')

module.exports = {
    newProduct: function(data){ 
	    return new Promise((resolve, reject) => {
			knex('products').insert(data).then( response => {
				resolve(response)
			}).catch(err => {
				reject(err)
			})
	    });   
    },
}
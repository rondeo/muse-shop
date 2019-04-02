let knex = require('../settings/db/knex')

module.exports = {
    verifyLogin: function(data){
        
	    return new Promise((resolve, reject) => {
			knex('users').select('*').then( response => {
				resolve(response)
			}).catch(err => {
				reject(err)
			})
	    });   
    },
}
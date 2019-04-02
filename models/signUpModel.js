let knex = require('../settings/db/knex')

module.exports = function(data){
    return new Promise((resolve, reject) => {
        knex('users').insert(data)
            .then(response => resolve(response) )
            .catch( err => reject(err))
    });
}
let knex = require('../settings/db/knex')

module.exports = {
    getAll: (data) => {
        return new Promise((resolve, reject) => {
            knex('products').select('*').then( (response) => {

                response ? resolve(response) : console.log('No data found')

            }).catch(err => reject(err))
        })
    },
    get: (data) => {
        return new Promise( (resolve, reject) =>{
            knex('products').select('*').where(data).then(response => {

                response ? resolve(response) : console.log('No data found')
            
            }).catch(err => reject(err))
        })
    }
}
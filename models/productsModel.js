let knex = require('../settings/db/knex')

module.exports = {
    getAll: (data) => {
        return new Promise((resolve, reject) => {
            knex('products').select('*').then(response => {

                response ? resolve(response) : console.log('No data found')

            }).catch(err => reject(err))
        })
    },
    get: (data) => {
        return new Promise((resolve, reject) => {
            knex('products').select('*').where(data).then(response => {

                response ? resolve(response) : console.log('No data found')

            }).catch(err => reject(err))
        })
    },
    getFew: data => new Promise((resolve, reject) => {
        let { counter } = data;
        knex.select('*').from('products').limit(counter).then(response => {
            if (response.length) {
                resolve(response)
            }
            else {
                resolve(0)
            }
        }).catch(err => {
            reject(err);
        })

    }),
    getOne: data => new Promise((resolve, reject) => {
        let id = data
        knex('products').where('id', id).then(response => {
            if(response.length){
                return resolve(response)
            }
            else{
                return resolve(0)
            }
        })
        .catch(err => reject(err))
    })
}
let config = require('../../app-settings')

let options = {}

if(process.env.NODE_ENV === 'production'){
    options = config.prod_database
}
else {
    options = config.local_database
}

let knex = require('knex')(options);

module.exports = knex;
let options = {
    client:'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'museshop'
    },
}

let knex = require('knex')(options);
module.exports = knex;
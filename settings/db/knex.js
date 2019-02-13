let options = {
    client:'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'test'
    },
}

let knex = require('knex')(options);
module.exports = knex;
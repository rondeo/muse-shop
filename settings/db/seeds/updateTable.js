let knex = require('../knex')

knex.schema.table('products', function (table) {
    table.string('quantidade', 100);
}).then(res => console.log(res))
    .catch(err => console.log(err))
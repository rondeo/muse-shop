let knex = require('../knex')

knex.schema.hasTable('products').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('products', (t) => {
            t.increments('id').primary();
            t.string('nome', 100);
            t.string('fornecedor', 100);
            t.string('altura');
            t.string('largura');
            t.string('profundidade');
            t.string('peso');
            t.string('valorCompra');
            t.string('valorVenda');
            t.string('imagens');
            t.string('categorias');
            t.text('obs');
        })
        .then( response => console.log(response, 'line 19'))
        .catch( err => console.log(err, 'line 20'))
    }
}).catch( err => console.log(err, 'line 22'))

knex.schema.hasTable('users').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('users', (t) => {
            t.increments('id').primary();
            t.string('nome', 100);
            t.string('email', 100);
            t.string('cpf');
            t.string('rua');
            t.string('bairro');
            t.string('cidade');
            t.string('estado');
            t.string('cep');
            t.string('pedidos');
        })
        .then( response => console.log(response, 'line 38'))
        .catch( err => console.log(err, 'line 39'))
    }
}).catch( err => console.log(err, 'line 41'))


knex.schema.hasTable('pedidos').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('pedidos', (t) => {
            t.increments('id').primary();
            t.string('client_id', 100);
            t.string('valor_total', 100);
            t.string('products_values');
            t.string('status');
            t.text('obs');
        })
        .then( response => console.log(response, 'line 54'))
        .catch( err => console.log(err, 'line 55'))
    }
}).catch( err => console.log(err, 'line 57'))
let config = {
    local_port: 4000,
    local_database: {
        client:'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'museshop'
        },
    },
    prod_database: {
        client:'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'museshop'
        },
    },
    root_path: __dirname,
    application_name: 'muse-shop'
}
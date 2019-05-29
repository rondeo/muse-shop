let config = {
    local_port: 4000,
    local_database: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'museshop'
        },
    },
    prod_database: {
        client: 'mysql',
        connection: {
            host: 'zf4nk2bcqjvif4in.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
            user: 'bduuk8td0n8e39yu',
            password: 'q4jclahkemih97f6',
            database: 'nfrw1dab52rhb5dj'
        },
    },
    root_path: __dirname,
    application_name: 'muse-shop'
}

module.exports = config
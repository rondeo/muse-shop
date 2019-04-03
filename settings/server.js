let express = require('express')
let app = express()
let routes = require('../routes/routes')
let middlewares = require('./middlewares')
let knexTableBuilder = require('./db/seeds/knexTables')

module.exports = function(){    
    
    middlewares(app)
    /** routes call */
    routes(app)
    
    knexTableBuilder()

    let port = process.env.PORT || 4000;

    app.listen(port, function(){
        console.log('listening on ' + port)
    })
}
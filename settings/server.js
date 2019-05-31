let express = require('express')
let app = express()
let routes = require('../routes/routes')
let middlewares = require('./middlewares')
let knexTableBuilder = require('./db/seeds/knexTables')

module.exports = function(){    
    
    middlewares(app)
    /** routes call */
    routes(app)


    //to need the app for the first time you need uncoment this line with knexTableBuilder() 
    //knexTableBuilder()

    
    let port = process.env.PORT || 4003;

    app.listen(port, function(){
        console.log('listening on ' + port)
    })
}
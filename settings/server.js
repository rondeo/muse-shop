let express = require('express')
let app = express()
let routes = require('../routes/routes')
let middlewares = require('./middlewares')

module.exports = function(){    

    //middlewares(app)
    /** routes call */
    //routes(app)
    app.get('/', (req, res) => {
        res.send('loading here')
    })
    let port = process.env.PORT || 4000;

    app.listen(port, function(){
        console.log('listening on ' + port)
    })
}
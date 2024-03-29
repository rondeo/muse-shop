let express = require('express')
let app = express()
let routes = require('../routes/routes')
let middlewares = require('./middlewares')



module.exports = () => {
    // middlewares call
    middlewares(app)

    /** routes call */
    routes(app)

    let port = process.env.PORT || 4003;

    app.listen(port, () => {
        console.log(`listening on ${port}`)
    })
}
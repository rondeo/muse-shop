const aboutUsController = require('./aboutUsController')
const buscaController = require('./buscaController')
const contatoController = require('./contatoController')
const homeController = require('./homeController')
const loginController = require('./loginController')

module.exports = (app) => {
    app.use('/', aboutUsController)
    app.use('/', buscaController)
    app.use('/', contatoController)
    app.use('/', loginController)
    app.use('/', homeController)
}
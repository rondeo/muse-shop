const aboutUsController = require('./aboutUsController')
const buscaController = require('./buscaController')
const contatoController = require('./contatoController')
const homeController = require('./homeController')
const authController = require('./authController')
const productsController = require('./productsController')

module.exports = (app) => {
    app.use('/', aboutUsController)
    app.use('/', buscaController)
    app.use('/', contatoController)
    app.use('/', authController)
    app.use('/', homeController)
    app.use('/', productsController)
}
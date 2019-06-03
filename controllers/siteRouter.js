const aboutUsController = require('./aboutUsController')
const buscaController = require('./buscaController')
const contatoController = require('./contatoController')
const homeController = require('./homeController')
const loginController = require('./loginController')
const productsController = require('./productsController')

module.exports = (app) => {
    app.use('/', aboutUsController)
    app.use('/', buscaController)
    app.use('/', contatoController)
    app.use('/', loginController)
    app.use('/', homeController)
    app.use('/', productsController)
}
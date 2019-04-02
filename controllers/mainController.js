let homeController = require('./homeController')
let loginController = require('./loginController')
let signUpController = require('./signUpController')
let aboutUsController = require('./aboutUsController')
let buscaController = require('./buscaController')

module.exports = {
    home: (req, res) => homeController(req, res),
    login: (req, res) => loginController(req, res),
    aboutUs: (req, res) => aboutUsController(req, res),
    busca: (req, res) => buscaController(req, res),
    signUp: (req, res) => signUpController(req, res)
}
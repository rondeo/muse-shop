let homeController = require('./homeController')
let loginController = require('./loginController')
let aboutUsController = require('./aboutUsController')
let buscaController = require('./buscaController')
let signUpController = require('./signUpController')
let contatoController = require('./contatoController')

module.exports = {
    home: (req, res) => homeController(req, res),
    login: (req, res) => loginController(req, res),
    aboutUs: (req, res) => aboutUsController(req, res),
    busca: (req, res) => buscaController(req, res),
    signUp: (req, res) => signUpController(req, res),
    contato: (req, res) => contatoController(req, res),
}
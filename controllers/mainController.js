let homeController = require('./homeController')
let loginController = require('./loginController')
let signUpController = require('./signUpController')

module.exports = {
    home: function(req, res){
        homeController(req, res)
    },
    login: function(req, res){
        loginController(req, res)
    },
    signUp: function(req, res){
        signUpController(req, res)
    }
}
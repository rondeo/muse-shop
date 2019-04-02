let userController = require('./userController')
let pagesController = require('./pagesController')
let adminLoginController = require('./adminLoginController')
let adminHomeController = require('./adminHomeController')
let productsController = require('./productsController')
let clientsController = require('./clientsController')
let ordersController = require('./ordersController')

module.exports = {

    users: (req, res) => userController(req, res),
    
    newUser: (req, res) => userController(req, res),
    
    pages: (req, res) => pagesController(req, res),
    
    login: (req, res) => adminLoginController(req, res),
    
    admin: (req, res) => adminHomeController(req, res),
    
    products: (req, res) => productsController(req, res),
    
    newProduct: (req, res) => productsController(req, res),
    
    clients: (req, res) => clientsController(req, res),
    
    newClient: (req, res) => clientsController(req, res),
    
    orders: (req, res) => ordersController(req, res),
    
    newOrders: (req, res) => ordersController(req, res),
    
}
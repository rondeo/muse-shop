let adminHomeController = require('./controllers/adminHomeController')
let adminLoginController = require('./controllers/adminLoginController')
let productsController = require('./controllers/productsController')
let userController = require('./controllers/userController')
let clientsController = require('./controllers/clientsController')
let ordersController = require('./controllers/ordersController')
let authMiddleWare = require('../providers/adminToken');

module.exports = (app) => {
    app.use('/admin', authMiddleWare)
    app.use('/admin', adminHomeController)
    app.use('/admin', adminLoginController)
    app.use('/admin', productsController)
    app.use('/admin', userController)
    app.use('/admin', clientsController)
    app.use('/admin', ordersController)
}
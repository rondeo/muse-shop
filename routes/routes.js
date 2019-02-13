let sessions = require('express-session')
let controllers = require('../controllers/mainController')
let adminControllers = require('../admin/controllers/adminMainControllers')
let aliasRoutes = require('./route-alias')

module.exports = function (app) {

    app.use(sessions({
        secret: 'a3s2d1qwe3215asdh',
        proxy: true,
        resave: true,
        saveUninitialized: true
    }))
    
    app.all(/^((?!src).)*$/s, (req, res) => {
        if(req.url){
            let params = req.url.split('/')
            let routeName = aliasRoutes(params[1])
            
            if(req.url === '/'){
                controllers.home(req, res)
            }
            //admin routes
            else if(req.path.indexOf('admin') != -1){
                
                let routeAdmin = aliasRoutes(params[1])
                
                if(params[2]){
                    routeAdmin = aliasRoutes(params[2])
                }
                if(routeAdmin in adminControllers){
                    adminControllers[routeAdmin](req, res)
                }
                else{
                    return res.send('page not found')
                }
            }
            //main web site routes
            else if (routeName in controllers){
                controllers[routeName](req, res)
            }
            else{
                res.send('page not found')
            }
        }
        else{
            res.send('nothing to load')
        }
    })
}
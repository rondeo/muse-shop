
let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')
let sessions = require('express-session')

module.exports = function (app) {
  function ignoreFavicon(req, res, next) {
    if (req.originalUrl === '/favicon.ico') {
      res.status(204).json({ nope: true });
    } else {
      next();
    }
  }
  app.use(ignoreFavicon);
  /** view and paths for views and assets */
  app.set('view engine', 'ejs')
  app.use(express.static(path.join(__dirname, '../public')));
  app.use('/admin', express.static(path.join(__dirname, '../public')));
  app.use('/admin/products', express.static(path.join(__dirname, '../public')));


  // Add headers

  app.use(sessions({
    secret: 'a3s2d1qwe3215asdh',
    proxy: true,
    resave: true,
    saveUninitialized: true
  }))


  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.use(function (req, res, next) {

    // Website you wish to allow to connect
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


    // Pass to next layer of middleware
    next();
  });

}
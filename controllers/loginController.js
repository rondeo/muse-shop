let loginModel = require('../models/loginModel')
let jwt = require('jsonwebtoken')

module.exports = (req, res) => {

    // let session = {}
    if (req.method === 'POST') {
        let data = {};
        if (!req.body.name && !req.body.password) {
            return res.send('no user data on request')
        }
        data.name = req.body.name;
        data.password = req.body.password;

        loginModel.verifyLogin().then( response => {
            console.log(response)
            return res.send('user exists');
        }).catch(err => console.log(err))
    }
    if (req.method === 'GET') {
        res.send('you must be on the login page')
    }
}
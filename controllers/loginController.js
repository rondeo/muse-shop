let loginModel = require('../models/loginModel')
const express = require('express')
let router = express.Router()


router.get('/login', (req, res) => res.send('you must be on the login page'))
router.post('/login', (req, res) => {
    let data = {};
    if (!req.body.name && !req.body.password) {
        return res.send('no user data on request')
    }
    data.name = req.body.name;
    data.password = req.body.password;

    loginModel.verifyLogin().then(response => {
        console.log(response)
        return res.send('user exists');
    }).catch(err => console.log(err))
})
module.exports = router;
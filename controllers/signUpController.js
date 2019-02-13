//requires over here
let bodyParser = require('body-parser')
let signUpModel = require('../models/signUpModel')

module.exports = function (req, res, body) {
    let session = {}
    if (req.session.userid) {
        res.redirect('/overview')
        return;
    }
    if (req.method == 'GET') {
        res.render('sign-up')
    }
    if (req.method == 'POST') {
        let data = req.body;
        session = req.session;
        signUpModel(req.body).then(function (result, err) {
            if (result) {
                req.session.userid = result[0].user_id
                req.session.user_role = result[0].user_role
                req.session.cookie.maxAge = 60000
                req.session.save()
                res.redirect('/overview')
            }
        }).catch(err => {
            res.json(err.message)
        })
    }
}
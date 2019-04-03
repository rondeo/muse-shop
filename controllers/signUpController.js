//requires over here
let bodyParser = require('body-parser')
let signUpModel = require('../models/signUpModel')

module.exports = (req, res, body) => {
    let session = {}
    if (req.session.userid) {
        return res.redirect('/overview');
        
    }
    if (req.method == 'GET') {
        return res.render('site/sign-up')
    }
    if (req.method == 'POST') {
        let data = req.body;
        session = req.session;
        signUpModel(req.body).then( ( result, err ) => {
            if (result) {
                req.session.userid = result[0].user_id
                req.session.user_role = result[0].user_role
                req.session.cookie.maxAge = 60000
                req.session.save()
                return res.redirect('/overview')
            }
        }).catch(err => {
            return res.json(err.message)
        })
    }
}
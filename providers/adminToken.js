const jwt = require('jsonwebtoken')
const config = require('../app-settings')
const { api_secret } = config

module.exports = (req, res, next) => {
    let token = splitCookie(req.headers.cookie)
    if (req.path !== '/login') {
        jwt.verify(token, api_secret, (err, data) => {
            if (err) {
                return res.redirect('/admin/login')
            }
            else if (data.user.role == '1') {
                return next()
            }
            else {
                return res.redirect('/')
            }
        })
    }
    else {
        next()
    }
}

function splitCookie(data) {
    data = data.split(';')
    data = data.map(item => {
        item = item.trim()
        return item
    })
    let tokenCookie = null
    data.map(item => {
        item = item.split('=')
        if (item[0] === 'jwt') {
            tokenCookie = item[1]
        }
    })
    return tokenCookie
}
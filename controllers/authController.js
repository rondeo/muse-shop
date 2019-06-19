const authModel = require('../models/authModel')
const express = require('express')
const router = express.Router()
const authVerifier = require('../providers/authVerifier')
const jwt = require('jsonwebtoken')
const config = require('../app-settings')
const { api_secret } = config
const ensureToken = require('../providers/ensureToken')



router.get('/login', (req, res) => res.render('site/login'))
router.get('/sign-up', (req, res) => res.render('site/sign-up'))
router.get('/forgot-password', (req, res) => {
    return res.render('site/forgot')
})
router.post('/login', (req, res) => {
    let data = {};
    if (!req.body.email && !req.body.password) {
        return res.send('no user data on request')
    }
    data.email = req.body.email;
    data.password = req.body.password;

    authModel.verifyLogin(data).then(response => {
        if (response.code == 200) {
            let responseData = response.response
            let user = {
                id: responseData[0].id,
                name: responseData[0].nome,
                role: responseData[0].role
            }
            let token = jwt.sign({ user }, api_secret)
            res.cookie('jwt', token);
            let dataResponse = {
                code: 200,
                url: '/',
                message: 'Login Ok',
                token: token
            }

            return res.json(dataResponse);
        }
        else if (response.code === 205) {
            return res.json(response)
        }
        else {
            let dataResponse = {
                code: 121,
                message: 'Senha incorreta'
            }
            return res.json(dataResponse)
        }
    }).catch(err => console.log(err))
})
router.post('/sign-up', (req, res) => {
    let data = req.body;
    let response = authVerifier(data)
    if (response.isValid) {
        data.cpf = data.cpf.trim()
        authModel.signUp(data).then(response => {
            let dataResponse = {}
            if (response.code === 2) {
                dataResponse = {
                    code: 253,
                    message: 'CPF já registrado! Tente a recuperação de senha'
                }
            }
            if (response.code == 200) {
                dataResponse = {
                    code: 200,
                    message: 'Your sign Up Sucessfully!',
                    url: '/login-ok'
                }
            }
            else if (response.code == 0) {
                dataResponse = {
                    code: 300,
                    message: 'Estamos com problemas em nossos servidores, tente mais tarde!',
                    url: '/'
                }
            }
            res.json(dataResponse)
        })
    } else {
        return res.json(response)
    }
})
router.get('/api/verifyToken', ensureToken, (req, res) => {
    jwt.verify(req.token, api_secret, (err, data) => {
        if (err) {
            res.json({
                isProtected: false
            })
        }
        else {
            res.json({
                text: 'this is protected',
                data: data,
                isProtected: true
            })
        }
    })
})
module.exports = router;
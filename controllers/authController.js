const authModel = require('../models/authModel')
const express = require('express')
const router = express.Router()
const authVerifier = require('../providers/authVerifier')

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

router.get('/login', (req, res) => res.render('site/login'))
router.get('/sign-up', (req, res) => res.render('site/sign-up'))

router.post('/login', (req, res) => {
    let data = {};
    if (!req.body.email && !req.body.password) {
        return res.send('no user data on request')
    }
    data.email = req.body.email;
    data.password = req.body.password;

    authModel.verifyLogin(data).then(response => {
        if (response.code == 200) {
                let dataResponse = {
                    code: 200,
                    url: '/',
                    message: 'Login Ok',
                    token: 'laskdjf09a8sdfasdf0a9s8dflaksjdf098'
                }
                return res.json(dataResponse);
            } 
            else if(response.code === 205){
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
        data.cpf = replaceAll(data.cpf, '.', '')
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
module.exports = router;
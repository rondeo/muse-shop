const express = require('express')
const router = express.Router()

router.get('/clients', (req, res) => res.render('admin/clients/index'))
router.post('/post', (req, res) => res.send('you are loading a post for client'))
router.get('/new-client', (req, res) => res.render('admin/clients/new-client'))

module.exports = router;
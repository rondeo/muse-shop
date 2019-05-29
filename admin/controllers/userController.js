const express = require('express')
const router = express.Router()

router.get('/users', (req, res) => res.render('admin/users/index'))
router.post('/users', (req, res) => res.send('you are loading the post for user'))
router.get('/new-user', (req, res) => res.render('admin/users/new-user'))

module.exports = router;
const express = require('express')
const router = express.Router()

router.get('/orders', (req, res) => res.render('admin/orders/index'))
router.post('/orders', (req, res) => res.send('you are loading a post for order'))
router.get('new-order', (req, res) => res.render('admin/orders/new-order'))

module.exports = router
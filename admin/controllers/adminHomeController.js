const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    //return res.send('loading the home of admin')
    return res.render('admin/index')
})


module.exports = router
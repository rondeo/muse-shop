let homeModel = require('../models/homeModel')

module.exports = (req, res) => {
    homeModel.getHomeProducts().then((response) => {
        

        return res.render('site/home')
    })
}
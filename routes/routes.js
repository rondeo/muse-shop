const adminRouter = require('../admin/adminRouter')
const siteRouter = require('../controllers/siteRouter')


module.exports = (app) => {
    adminRouter(app)
    siteRouter(app)
}
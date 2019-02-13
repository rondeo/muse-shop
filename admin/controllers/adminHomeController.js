module.exports = (req, res) => {
    if(req.method === 'GET'){
       return res.render('admin/index')
    }
}
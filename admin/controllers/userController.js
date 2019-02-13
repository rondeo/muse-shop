module.exports = (req, res) => {
    if(req.method === 'GET' && req.url === '/admin/users'){
        return res.render('admin/users/index')
    }
    if(req.method === 'POST'){
        let data = req.body;
        return res.send('you are loading a post for product')
    }
    if(req.method === 'GET' && req.url === '/admin/new-user'){
        return res.render('admin/users/new-user')
    }
}
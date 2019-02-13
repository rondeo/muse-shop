module.exports = (req, res) => {
    if(req.method === 'GET' && req.url === '/admin/clients'){
        return res.render('admin/clients/index')
    }
    if(req.method === 'POST'){
        let data = req.body;
        return res.send('you are loading a post for client')
    }
    if(req.method === 'GET' && req.url === '/admin/new-client'){
        return res.render('admin/clients/new-client')
    }
}
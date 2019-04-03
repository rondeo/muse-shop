module.exports = (req, res) => {
    if(req.method === 'GET' && req.url === '/admin/orders'){
        return res.render('admin/orders/index')
    }
    if(req.method === 'POST'){
        let data = req.body;
        return res.send('you are loading a post for order')
    }
    if(req.method === 'GET' && req.url === '/admin/new-order'){
        return res.render('admin/orders/new-order')
    }
}
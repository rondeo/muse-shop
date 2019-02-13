let productsModel = require('../models/productsModel.js')


module.exports = (req, res) => {
    let url = req.url;
    if(url.endsWith('/')){
        url = url.substring(0, req.url.length -1);
    }
    console.log(url)
    //console.log(url.charAt(req.url.length - 1))
    if(req.method === 'GET' && url === '/admin/products'){
        return res.render('admin/products/index')
    }
    if(req.method === 'POST' && req.url === '/admin/new-product'){
        let data = req.body;
        if(!data.nome && !data.valorVenda){
            res.send('Please verify your fields')
        }
        else{
            productsModel.newProduct(data).then((response) => {
                if(response){
                    return res.send('New product Saved')
                }
            }).catch(err => console.log(err))
        }
        
        return res.send('you are loading a post for product')
    }
    if(req.method === 'GET' && req.url === '/admin/new-product'){
        return res.render('admin/products/new-product')
    }
}
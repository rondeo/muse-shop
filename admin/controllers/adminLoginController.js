module.exports = (req, res) => {
    if(req.method === 'GET'){
        return res.send('you are on the admin login page')
    }
}
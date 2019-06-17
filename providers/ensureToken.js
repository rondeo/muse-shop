module.exports = (req, res, next) => {
    const bearerHeader = req.headers["authorization"]
    console.log(bearerHeader)
    if (bearerHeader) {
        console.log('loading here')
        const bearer = bearerHeader.split(" ")
        const bearerToken = bearer[1]
        req.token = bearerToken
        next()
    }
    else {
        'not loading here'
        res.sendStatus(403)
    }
}
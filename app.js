let express = require('express')
let app = express()


app.get('/', (req, res)=> {
    console.log('loading here')
    res.send('loading the file')
})


let port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('running on port ' + port)
})
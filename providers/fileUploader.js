
let bodyParser = require('body-parser')

let multer = require('multer')
let storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, './uploads')
    },
    filename: (req, file, cb) =>{
        let fileDateTime = S(new Date().toISOString()).replaceAll(':','-')
        console.log('loading filename')
        cb(null, fileDateTime + file.originalname)
    }
})

let upload = multer({storage}).single('imagens')

module.exports = upload;
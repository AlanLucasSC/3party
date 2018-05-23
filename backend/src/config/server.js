const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

//Upload file
const multer  = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img')
  },
  filename: function (req, file, cb) {
  	var ext = file.originalname.substr(file.originalname.lastIndexOf('.') + 1)
    cb(null, file.fieldname + '-' + Date.now() + '.' + ext)
  }
})

var upload = multer({ storage: storage })


server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)


//Application
server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

server.post('/file', upload.single('image'), function (req, res, next) {
	console.log(req.file);
	/*
		Salvar no banco de dados os dados do arquivo
	*/

	/*
		Responder o cliente
	*/
	res.json({
      resp: 'ok'
  })
})


//Deixar acessível a pasta public
server.use('/assets', express.static('public/img/'));

module.exports = server
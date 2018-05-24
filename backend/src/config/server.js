const port = 3003

//Third Party
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

//Upload file
const multer  = require('multer')

//Model
const Users = require('../api/user/user')

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
	console.log(req.file)
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

server.get('/testando/:email', function (req, res, next) {

  /*
    Salvar no banco de dados os dados do arquivo
  */

  Users.findOneAndUpdate({email: req.params.email}, {information: [{ key: 'Evento', value: 'Casamento do meu amigo' }]})
    .then(function(){
      console.log('Ok');
    })

  Users.find({email: req.params.email}, function(err, users){
    if(err){
      res.status(500)
      res.send('Erro interno do servidor');
      next();
    } else {
      /*
        Responder o cliente
      */
      res.status(200)
      res.json({
            resp: 'ok',
            email: req.params.email,
            users: users
      })
      //res.send(users);
      //User = users;
    }
  })
})


//Deixar acessar a pasta public
server.use('/assets', express.static('public/img/'));

module.exports = server
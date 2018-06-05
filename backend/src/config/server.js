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
    cb(null, 'img/')
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
	//console.log(req.file)
  //console.log(req.file.path)

  /*
    Comprimir a imagem
  */
  var compress_images = require('compress-images'), INPUT_path_to_your_images, OUTPUT_path;
 
  INPUT_path_to_your_images = 'img/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
  OUTPUT_path = 'public/img/';
  
  compress_images(INPUT_path_to_your_images, OUTPUT_path, {compress_force: false, statistic: true, autoupdate: true}, false,
    {jpg: {engine: 'tinify', key: "6ZCbK7yzQwMvxNNtcI7ljqpcvbY8cBRF", command: false}},
    {png: {engine: 'pngquant', command: ['--quality=20-50']}},
    {svg: {engine: 'svgo', command: '--multipass'}},
    {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, function(){
  });

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
server.use('/assets', express.static('public/img'));

module.exports = server
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://172.19.16.21:26027/auth')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é requerido"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' infomrado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = " '{VALUE}' não é válido para o atributo '{PATH}'."
const restful = require('node-restful')
const mongoose = restful.mongoose

const information = new mongoose.Schema({
    key: { type: String, require: true },
    value: { type: String, require: true }
})

const user= new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    role: { type: Number, require: true, default: 0 },
    user: { type: Number, require: true, default: 0 },
    information: [ information ]

    //done: { type: Boolean, require: true, default: false },
    //createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('User', user)
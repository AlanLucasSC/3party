const restful = require('node-restful')
const mongoose = restful.mongoose

const adress = new mongoose.Schema({
    street: { type: String, require: true },
    email: [],
    number: { type: Number, require: false },
    createdAt: { type: Date, default: Date.now }
})

const vendor = new mongoose.Schema({
    name: { type: String, require: true },
    email: [],
    password: { type: String, require: true },
    done: { type: Boolean, require: true, default: false },
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Vendor', vendor)
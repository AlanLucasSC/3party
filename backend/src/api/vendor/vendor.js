const restful = require('node-restful')
const mongoose = restful.mongoose

const information = new mongoose.Schema({
    key: { type: String, require: true },
    value: { type: String, require: true }
})

const product = new mongoose.Schema({
    name: { type: String, require: true },
    price: { type: String, require: true },
    information: [information]
})

const adress = new mongoose.Schema({
    street: { type: String, require: true },
    city: { type: String, require: true },
    state: { type: String, require: true },
    number: { type: Number, require: false },
})

const vendor = new mongoose.Schema({
    name: { type: String, require: true },
    img: { data: Buffer, contentType: String, require: false },
    adress: adress,
    products: [product]
})

module.exports = restful.model('Vendor', vendor)
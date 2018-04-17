const restful = require('node-restful')
const mongoose = restful.mongoose

const information = new mongoose.Schema({
    key: { type: String, require: true },
    value: { type: String, require: true }
})

const coupon = new mongoose.Schema({
    discount: { type: Number, require: true },
    type: { type: String, required: true, uppercase: true, enum: ['PORCENTAGEM', 'DINHEIRO'] },
    start: { type: Date, require: true},
    end: { type: Date, require: true},
    name: { type: String, require: false }
})

const product = new mongoose.Schema({
    name: { type: String, require: true },
    price: { type: String, require: true },
    information: [information],
    coupon: [coupon]
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
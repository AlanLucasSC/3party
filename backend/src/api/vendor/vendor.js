const restful = require('node-restful')
const mongoose = restful.mongoose

const information = new mongoose.Schema({
    key: { type: String, required: true },
    value: { type: String, required: true }
})

const coupon = new mongoose.Schema({
    name: { type: String, required: false },
    discount: { type: Number, required: true },
    type: { type: String, requiredd: true, uppercase: true, enum: ['PORCENTAGEM', 'DINHEIRO'] },
    start: { type: Date, required: true},
    end: { type: Date, required: true},
    code: { type: String, required: false },
    amount: { type: Number, required: false },
    status: { type: String, requiredd: true, uppercase: true, enum: ['ABERTO', 'RESTRITO'] }
})

const adress = new mongoose.Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    number: { type: Number, required: false },
})

const product = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    information: [information],
    coupon: [coupon],
    adress: adress
})

const vendor = new mongoose.Schema({
    name: { type: String, required: true },
    img: { data: Buffer, contentType: String, required: false },
    products: [product]
})

module.exports = restful.model('Vendor', vendor)
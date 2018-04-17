const restful = require('node-restful')
const mongoose = restful.mongoose

const coupon = new mongoose.Schema({
    discount: { type: Number, require: true },
    type: { type: String, required: true, uppercase: true, enum: ['PORCENTAGEM', 'DINHEIRO'] },
    start: { type: Date, require: false},
    end: { type: Date, require: false},
    name: { type: String, require: false },
    status: { type: String, required: true, uppercase: true, enum: ['ABERTO', 'RESTRITO'] }
})

const bundle = new mongoose.Schema({
    products: [{ type: Number, require: true }],
    coupon: coupon
})

module.exports = restful.model('Bundle', bundle)
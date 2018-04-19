const restful = require('node-restful')
const mongoose = restful.mongoose

const coupon = new mongoose.Schema({
    discount: { type: Number, required: true },
    type: { type: String, requiredd: true, uppercase: true, enum: ['PORCENTAGEM', 'DINHEIRO'] },
    start: { type: Date, required: false},
    end: { type: Date, required: false},
    name: { type: String, required: false },
    amount: { type: Number, required: false },
    status: { type: String, requiredd: true, uppercase: true, enum: ['ABERTO', 'RESTRITO'] }
})

const bundle = new mongoose.Schema({
    products: [{ type: Number, required: true }],
    coupon: coupon
})

module.exports = restful.model('Bundle', bundle)
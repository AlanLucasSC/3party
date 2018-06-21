const restful = require('node-restful')
const mongoose = restful.mongoose

const solicitation = new mongoose.Schema({
    vendor: { type: String, required: true },
    product: { type: String, required: true },
    coupon: { type: Number, required: false },
    amount: { type: Number, required: false },
    people: { type: Number, required: false },
    date: { type: Date, require: true },
    price: { type: Number, require: true, default: 0.0 },
    status: { type: String, required: true, default: 'PENDENTE', uppercase: true, enum: ['PENDENTE', 'ACEITO', 'NEGADO'] },
    end: { type: Date, required: true, default: Date.now }
})

module.exports = restful.model('Solicitation', solicitation)
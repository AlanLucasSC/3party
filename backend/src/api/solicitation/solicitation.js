const restful = require('node-restful')
const mongoose = restful.mongoose

const solicitation = new mongoose.Schema({
    vendor: { type: String, required: true },
    product: { type: String, required: true },
    coupon: { type: Number, required: true },
    status: { type: String, required: true, default: 'ABERTO', uppercase: true, enum: ['ABERTO', 'ACEITO', 'NEGADO'] },
    end: { type: Date, required: true, default: Date.now }
})

module.exports = restful.model('Solicitation', solicitation)
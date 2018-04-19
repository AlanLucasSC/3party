const restful = require('node-restful')
const mongoose = restful.mongoose

const solicitation = new mongoose.Schema({
    vendor: { type: String, required: true },
    product: { type: String, required: true },
    coupon: { type: Number, required: true },
    status: { type: String, required: true, default: 'ABERTO', uppercase: true, enum: ['ABERTO', 'ACEITO', 'NEGADO'] },
    end: { type: Date, required: true, default: Date.now }
})

const event = new mongoose.Schema({
    user: { type: String, required: true },
    name: { type: String, required: false },
    solicitation: [solicitation],
    invoice: { type: Number, required: true, default: 0 },
    status: { type: String, required: true, default: 'ABERTO', uppercase: true, enum: ['ABERTO', 'FECHADO'] }
})

module.exports = restful.model('Event', event)
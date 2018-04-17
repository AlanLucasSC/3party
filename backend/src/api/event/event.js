const restful = require('node-restful')
const mongoose = restful.mongoose

const solicitation = new mongoose.Schema({
    vendor: { type: String, require: true },
    product: { type: String, require: true },
    coupon: { type: Number, require: true },
    status: { type: String, require: true, default: 'ABERTO', uppercase: true, enum: ['ABERTO', 'ACEITO', 'NEGADO'] }
})

const event = new mongoose.Schema({
    user: { type: String, require: true },
    name: { type: String, require: false },
    solicitation: [solicitation],
    invoice: { type: Number, require: true, default: 0 },
    status: { type: String, require: true, default: 'ABERTO', uppercase: true, enum: ['ABERTO', 'FECHADO'] }
})

module.exports = restful.model('Event', event)
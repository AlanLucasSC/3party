const restful = require('node-restful')
const mongoose = restful.mongoose

const event = new mongoose.Schema({
    user: { type: String, required: true },
    name: { type: String, required: false },
    date: { type: Date, require: true },
    solicitation: [{
        id: { type: String, required: false },
        type: { type: String, required: false },        
    }],
    invoice: { type: Number, required: true, default: 0 },
    status: { type: String, required: true, default: 'ABERTO', uppercase: true, enum: ['ABERTO', 'FECHADO'] }
})

module.exports = restful.model('Event', event)
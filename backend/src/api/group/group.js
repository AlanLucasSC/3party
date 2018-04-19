const restful = require('node-restful')
const mongoose = restful.mongoose

const information = new mongoose.Schema({
    key: { type: String, required: true },
    value: { type: String, required: true }
})

const checklist = new mongoose.Schema({
    value: { type: String, required: true },
    status: { type: String, required: true, default: 'ABERTO', uppercase: true, enum: ['ABERTO', 'CONCLUIDO'] }
})

const message = new mongoose.Schema({
    text: { type: String, required: true },
    name: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now }
})

const group = new mongoose.Schema({
    vendors: [{ type: String, required: true }],
    information: [information],
    checklist: [checklist],
    message: [message],
    user: { type: String, required: true }
})

module.exports = restful.model('Group', group)
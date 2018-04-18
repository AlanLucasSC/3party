const restful = require('node-restful')
const mongoose = restful.mongoose

const information = new mongoose.Schema({
    key: { type: String, require: true },
    value: { type: String, require: true }
})

const checklist = new mongoose.Schema({
    value: { type: String, require: true },
    status: { type: String, require: true, default: 'ABERTO', uppercase: true, enum: ['ABERTO', 'CONCLUIDO'] }
})

const message = new mongoose.Schema({
    text: { type: String, require: true },
    name: { type: String, require: true },
    date: { type: Date, require: true, default: Date.now }
})

const group = new mongoose.Schema({
    vendors: [{ type: String, require: true }],
    information: [information],
    checklist: [checklist],
    message: [message],
    user: { type: String, require: true }
})

module.exports = restful.model('Group', group)
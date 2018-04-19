const restful = require('node-restful')
const mongoose = restful.mongoose

const type = new mongoose.Schema({
    name: [{ type: String, required: true }],
    key: { type: String, required: true }
})

module.exports = restful.model('Type', type)
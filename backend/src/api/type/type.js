const restful = require('node-restful')
const mongoose = restful.mongoose

const type = new mongoose.Schema({
    name: [{ type: String, require: true }],
    key: { type: String, require: true }
})

module.exports = restful.model('Type', type)
const restful = require('node-restful')
const mongoose = restful.mongoose

const image = new mongoose.Schema({
    extension: { type: String, required: true }
})

module.exports = restful.model('Image', image)

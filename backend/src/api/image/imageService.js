const Image = require('./image')

Image.methods(['get', 'post', 'put', 'patch', 'delete'])
Image.updateOptions({new: true, runValidators: true})

module.exports = Image
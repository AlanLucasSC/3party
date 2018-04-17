const Bundle = require('./bundle')

Bundle.methods(['get', 'post', 'put', 'patch', 'delete'])
Bundle.updateOptions({new: true, runValidators: true})

module.exports = Bundle
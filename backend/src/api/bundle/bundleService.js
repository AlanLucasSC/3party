const Bundles = require('./bundle')

Bundles.methods(['get', 'post', 'put', 'patch', 'delete'])
Bundles.updateOptions({new: true, runValidators: true})

module.exports = Bundles
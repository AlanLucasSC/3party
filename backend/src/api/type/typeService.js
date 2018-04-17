const Types = require('./type')

Types.methods(['get', 'post', 'put', 'patch', 'delete'])
Types.updateOptions({new: true, runValidators: true})

module.exports = Types
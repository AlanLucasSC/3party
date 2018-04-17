const Type = require('./type')

Type.methods(['get', 'post', 'put', 'patch', 'delete'])
Type.updateOptions({new: true, runValidators: true})

module.exports = Type
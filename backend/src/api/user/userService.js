const User = require('./user')

User.methods(['get', 'post', 'put', 'patch', 'delete'])
User.updateOptions({new: true, runValidators: true})

module.exports = User
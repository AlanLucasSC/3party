const Users = require('./user')

Users.methods(['get', 'post', 'put', 'patch', 'delete'])
Users.updateOptions({new: true, runValidators: true})

module.exports = Users
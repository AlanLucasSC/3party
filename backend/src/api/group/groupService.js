const Groups = require('./group')

Groups.methods(['get', 'post', 'put', 'patch', 'delete'])
Groups.updateOptions({new: true, runValidators: true})

module.exports = Groups
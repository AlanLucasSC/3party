const Solicitations = require('./solicitation')

Solicitations.methods(['get', 'post', 'put', 'patch', 'delete'])
Solicitations.updateOptions({new: true, runValidators: true})

module.exports = Solicitations
const Events = require('./event')

Events.methods(['get', 'post', 'put', 'patch', 'delete'])
Events.updateOptions({new: true, runValidators: true})

module.exports = Events
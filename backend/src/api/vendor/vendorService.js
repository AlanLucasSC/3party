const Vendor = require('./vendor')

Vendor.methods(['get', 'post', 'put', 'patch', 'delete'])
Vendor.updateOptions({new: true, runValidators: true})

module.exports = Vendor
const express = require('express')
module.exports = function(server) {
    
    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //User Routes
    const user = require('../api/user/userService')
    user.register(router, '/user')

    //Vendor Routes
    const vendor = require('../api/vendor/vendorService')
    vendor.register(router, '/vendor')
}
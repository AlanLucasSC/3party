const express = require('express')
const bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

module.exports = function(server) {
    
    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //User
    const user = require('../api/user/userService')
    user.register(router, '/user')

    //Vendor
    const vendor = require('../api/vendor/vendorService')
    vendor.register(router, '/vendor')

    //Custom routes
    
    //Compare password
    router.get('/compare/:hash/:password', function(req, res, next) { 
        const password = req.params.password;
        const hash = req.params.hash;
        const resp = bcrypt.compareSync(password, hash);

        res.json({
            resp: resp
        })
    }); 
}
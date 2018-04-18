const express = require('express')
const passwordHash = require('password-hash')

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

    //Type
    const type = require('../api/type/typeService')
    type.register(router, '/type')

    //Bundle
    const bundle = require('../api/bundle/bundleService')
    bundle.register(router, '/bundle')

    //Bundle
    const event = require('../api/event/eventService')
    event.register(router, '/event')

    //Bundle
    const group = require('../api/group/groupService')
    group.register(router, '/group')

    //Custom routes
    
    //Compare password
    router.get('/compare/:hash/:password', function(req, res, next) { 
        const password = req.params.password;
        const hash = req.params.hash;
        const resp = passwordHash.verify(password, hash);

        res.json({
            resp: resp
        })
    }); 
}
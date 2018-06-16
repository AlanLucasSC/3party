const Vendors = require('./vendor')
const objectAssign = require('object-assign');


Vendors.methods(['get', 'post', 'put', 'patch', 'delete'])
Vendors.updateOptions({new: true, runValidators: true})

Vendors.route('products', function(req, res, next){
    Vendors.find(function (err, query) {
        if (err) {
            res.status(500)
            res.send("Erro interno do servidor")
        }
        else {
            res.status(200)
            array = []
            query.forEach(function(vendor){
                vendor.products.forEach(function(products){
                    //var teste = Object.assign(vendor.name, products);
                    products.vendor = vendor.name
                    products.vendor_id = vendor._id
                    array.push(products)
                })
            })
            res.send(array)
        }
    });
});

Vendors.route('products/:name', function(req, res, next){
    console.log(req.params.name)
    Vendors.find(function (err, query) {
        if (err) {
            res.status(500)
            res.send("Erro interno do servidor")
        }
        else {
            res.status(200)
            array = []
            query.forEach(function(vendor){
                vendor.products.forEach(function(products){
                    array.push(products)
                })
            })
            res.send(array)
        }
    });
});

module.exports = Vendors
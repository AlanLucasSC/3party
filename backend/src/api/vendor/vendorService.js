const Vendor = require('./vendor')

Vendor.methods(['get', 'post', 'put', 'patch', 'delete'])
Vendor.updateOptions({new: true, runValidators: true})

Vendor.route('products', function(req, res, next){
    Vendor.find(function (err, query) {
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

module.exports = Vendor
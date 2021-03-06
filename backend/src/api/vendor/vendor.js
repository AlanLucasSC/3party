const restful = require('node-restful')
const mongoose = restful.mongoose

const information = new mongoose.Schema({
    key: { type: String, required: true },
    value: { type: String, required: true }
})

const coupon = new mongoose.Schema({
    name: { type: String, required: false },
    discount: { type: Number, required: true },
    type: { type: String, requiredd: true, uppercase: true, enum: ['PORCENTAGEM', 'DINHEIRO'] },
    start: { type: Date, required: true},
    end: { type: Date, required: true},
    code: { type: String, required: false },
    amount: { type: Number, required: false },
    status: { type: String, required: true, uppercase: true, enum: ['ABERTO', 'RESTRITO'] }
})

const adress = new mongoose.Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    number: { type: Number, required: false },
    neighborhood: { type: String, required: false }
})

const contact = new mongoose.Schema({
    key: { type: String, required: true },
    value: { type: String, required: true }
})

const product = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: false, default: 'foto.jpg'},
    vendor: { type: String, required: false, default: ''},
    vendor_id: { type: String, required: false, default: ''},
    rating: { type: Number, required: true, default: 0 },
    information: [information],
    coupon: [coupon],
    adress: [adress],
    contract: { type: Boolean, required: true, default: false }
    //contact: [contact]
})

const vendor = new mongoose.Schema({
    name: { type: String, required: true },
    img: { data: Buffer, contentType: String, required: false },
    products: [product],
    //contact: [contact]
})

module.exports = restful.model('Vendor', vendor)
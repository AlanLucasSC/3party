const restful = require('node-restful')
const passwordHash = require('password-hash')
const mongoose = restful.mongoose


const information = new mongoose.Schema({
    key: { type: String, require: true },
    value: { type: String, require: true }
})

const user = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, index: { unique: true } },
    password: { type: String, require: true },
    vendor: { type: String, require: false},
    information: [ information ]
})

user.pre('save', function(next) {
    const user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    //generate a hash
    const hash = passwordHash.generate(user.password);
    user.password = hash;

    next();
});

module.exports = restful.model('User', user)
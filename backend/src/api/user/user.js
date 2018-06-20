const restful = require('node-restful')
const passwordHash = require('password-hash')
const uniqueValidator = require('mongoose-unique-validator');
const mongoose = restful.mongoose


const information = new mongoose.Schema({
    key: { type: String, required: true },
    value: { type: String, required: true }
})

const user = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    vendor: { type: String, required: false},
    contract: { type: String, required: true, default: 'PENDENTE', uppercase: true, enum: ['ACEITO', 'PENDENTE', 'REJEITADO'] },
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

user.plugin(uniqueValidator, { message: 'Erro, já existe um email: {PATH}.' })

module.exports = restful.model('User', user)
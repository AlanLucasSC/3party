const restful = require('node-restful')
const mongoose = restful.mongoose
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

const information = new mongoose.Schema({
    key: { type: String, require: true },
    value: { type: String, require: true }
})

const user= new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, index: { unique: true } },
    password: { type: String, require: true },
    vendor: { type: Number, require: false},
    information: [ information ]

    //done: { type: Boolean, require: true, default: false },
    //createdAt: { type: Date, default: Date.now }
})

user.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

module.exports = restful.model('User', user)
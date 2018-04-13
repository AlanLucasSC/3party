const User = require('./user')

User.methods(['get', 'post', 'put', 'patch', 'delete'])
User.updateOptions({new: true, runValidators: true})

User.route('compare', function(req, res, next) {
    res.send(req);
});

module.exports = User
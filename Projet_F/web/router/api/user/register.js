var router = require('express').Router();
var User = require('../../../../models/User');
var hash = require('../../../../helpers/hash');

router.get('/', function(req, res) {
    User.find({}).then(function(users) {
        res.json(users);
    });
});

router.post('/', function(req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    var newUser = new User({
        username: username,
        email: email,
        password: hash.hashPassword(password)
    }).save().then(function(userSaved) {
        res.json(userSaved);
    });

});

module.exports = router;

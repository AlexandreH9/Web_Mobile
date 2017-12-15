var router = require('express').Router();
var User = require('../../../../models/User');
var hash = require('../../../../helpers/hash');
var passport = require('passport');

router.get('/', passport.authenticate('jwt', {session: false}), function(req, res) {
    User.find({}).then(function(users) {
        res.json(users);
    });
});

router.get('/test', (req, res) => {
    res.json("Test");
});

router.post('/', function(req, res) {
    // var username = req.body.username;
    // var email = req.body.email;
    // var password = req.body.password;
    var idSteam = req.body.idSteam;

    if(!req.body.email || !req.body.password || !req.body.username)
    {
        res.json({ message: 'Champ non rempli' });
    } else {

        var newUser = new User({
            username: username,
            email: email,
            password: hash.hashPassword(password),
            idSteam: idSteam
        }).save().then(function (userSaved) {
            res.json(userSaved);
        });

    }

});

module.exports = router;

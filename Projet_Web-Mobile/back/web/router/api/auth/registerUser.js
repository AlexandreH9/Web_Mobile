/**
 * Created by pierr on 16/04/2017.
 */
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
    var idSteam = 0 ;

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

/**
 * Created by user on 31/03/2017.
 */
var router = require('express').Router();
var jwt = require('jwt')

router.post('/login', function (req, res) {
    User.findOne({
        name: req.body.username
    }, function(error, user) {
        if (error) throw  error;

        if (!user) {
            res.json({ sucess: false, message: 'User Nope'});
        }
        else if (user) {
            if (user.password != req.body.password) {
                res.json({ sucess: false, message: 'Mdp Nope'});
            }
            else {
                var token = jwt.sign(user, 'supersecret'), {
                    expiresInMinutes: 1440
                });
                res.json({sucess: true, message:'Yep', token: token});
            }
        }
    });
});

modules.exports = router;
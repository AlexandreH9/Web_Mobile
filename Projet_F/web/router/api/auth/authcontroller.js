/**
 * Created by user on 31/03/2017.
 */
var router = require('express').Router();
var jwt = require('jsonwebtoken');
var User = require('../../../../models/User');

router.post('/login', function (req, res) {
    User.findOne({
            name: req.body.username
        },
        function(error, user) {
            if (error) throw  error;

            if (!user) {
                res.json({ success: false, message: 'User Nope'});
            }
            else if (user) {
                if (user.password != req.body.password) {
                    res.json({ success: false, message: 'Mdp Nope'});
                }
                else {
                    var token = jwt.sign(user, 'superSecretMotherFucker', {
                        expiresInMinutes: 1440
                    });
                    res.json({success: true, message:'Yep', token: token});
                }
            }
        });
});

module.exports = router;
/**
 * Created by user on 31/03/2017.
 */
var router = require('express').Router();
var jwt = require('jsonwebtoken');
var User = require('../../../../models/User');
var passport = require("passport");
var passportJWT = require("passport-jwt");
var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;
var conf = require('../../../../config');

//=================First method===============

// router.post('/login', function (req, res) {
//     User.findOne({
//             name: req.body.username
//         },
//         function(error, user) {
//             if (error) throw  error;
//
//             if (!user) {
//                 res.json({ success: false, message: 'User Nope'});
//             }
//             else if (user) {
//                 if (user.password != req.body.password) {
//                     res.json({ success: false, message: 'Mdp Nope'});
//                 }
//                 else {
//                     var token = jwt.sign(user, 'superSecretMotherFucker', {
//                         expiresInMinutes: 1440
//                     });
//                     res.json({success: true, message:'Yep', token: token});
//                 }
//             }
//         });
// });
//
// module.exports = router;



//=================Second method===============

var params = {
    secretOrKey: conf.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
};

//Ou sont save les users ????

module.exports = function() {
    var strategy = new Strategy(params, function(payload, done) {
        var user = users[payload.id] || null;
        if (user) {
            return done(null, {
                id: user.id
            });
        } else {
            return done(new Error("User not found"), null);
        }
    });
    passport.use(strategy);
    return {
        initialize: function() {
            return passport.initialize();
        },
        authenticate: function() {
            return passport.authenticate("jwt", cfg.jwtSession);
        }
    };
};
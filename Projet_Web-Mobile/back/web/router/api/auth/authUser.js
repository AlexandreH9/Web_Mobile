/**
 * Created by user on 31/03/2017.
 */
var router = require('express').Router();
var jwt = require('jsonwebtoken');
var User = require('../../../../models/User');
var hash = require('../../../../helpers/hash');
var bodyParser = require('body-parser');
var passport = require("passport");
var passportJWT = require("passport-jwt");
var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;


//=================First method===============FAIL

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

var jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = "superSecretMotherFucker";

var strat = new Strategy(jwtOptions, function(data, done) {
    console.log('data received', data);
    User.findOne({_id: data.id}, function(error, user) {

        // if (!user) {
        //     res.status(401).json({message:"Nope ID"});
        // }
        if (user) {
            done(null, user)
        }
        else {
            done(null, false);
        }

    });

});

passport.use(strat);
router.use(passport.initialize());
router.use(bodyParser.urlencoded({
    extended: true
}));


router.post("/", function(req, res) {
    //console.log(req.body.user.username);
    console.log(req.body.username);
    User.findOne({username: req.body.username}, function(err, user) {
        if (!user) {
                res.status(401).json({message: 'User Nope'});
        }
        else {
            console.log(user);
            if (hash.hashPassword(req.body.password) != user.password) {

                res.status(401).json({message: 'Mdp Nope'});

            }
            else {

                var data = {id: user.id};
                var token = jwt.sign(data, jwtOptions.secretOrKey);
                res.json({message: 'Yep', token: token});

            }
        }
    });
});


router.use(function(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, app.get(''))
    }

})

module.exports = router;




























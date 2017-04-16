/**
 * Created by user on 13/04/2017.
 */
var router = require('express').Router();
var jwt = require('jsonwebtoken');
var Team = require('../../../../models/Team');
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
    Team.findOne({_id: data.id}, function(error, team) {

        // if (!team) {
        //     res.status(401).json({message:"Nope ID"});
        // }
        if (team) {
            done(null, team)
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
    Team.findOne({teamname: req.body.teamname}, function(err, team) {
        if (!team) {
            res.status(401).json({message: 'Team Nope'});
        }
        else {
            console.log(team);
            if (hash.hashPassword(req.body.password) != team.password) {

                res.status(401).json({message: 'Mdp Nope'});

            }
            else {

                var data = {id: team.id};
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








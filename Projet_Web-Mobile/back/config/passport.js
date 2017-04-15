/**
 * Created by Alexandre on 15/04/2017.
 */
var passportJWT = require('passport-jwt').Strategy;
var User = require('../../../../models/User');
var config = require('../../../../config/index');

module.exports = function(passport) {
    var opts = {};
    opts.secretOrKey = "superSecretMotherFucker";
    passport.use(new passportJWT(opts, function(jwt_payload, done) {
        User.findOne({id: jwt_payload.id}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }));
};
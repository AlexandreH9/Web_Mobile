/**
 * Created by Alexandre on 15/04/2017.
 */
var passportJWT = require('passport-jwt').Strategy;
var User = require('../../../../models/User');
var Team = require('../../../../models/Team');
var ExtractJwt = passportJWT.ExtractJwt;
var config = require('../config/index')

module.exports = function(passport) {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = "superSecretMotherFucker";
    passport.use(new passportJWT(opts, function(jwt_payload, done) {
        User.findOne({username: jwt_payload.username}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
        Team.findOne({id: jwt_payload.id}, function(err, team) {
            if (err) {
                return done(err, false);
            }
            if (team) {
                done(null, team);
            } else {
                done(null, false);
            }
        });
    }));
};
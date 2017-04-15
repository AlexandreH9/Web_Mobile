/**
 * Created by Alexandre on 15/04/2017.
 */
var passportJWT = require('passport-jwt').Strategy;
var Team = require('../../../../models/Team');
var config = require('../../../../config/index');

module.exports = function(passportTeam) {
    var opts = {};
    opts.secretOrKey = config.secret;
    passportTeam.use(new passportJWT(opts, function(jwt_payload, done) {
        Team.findOne({teamname: jwt_payload.teamname}, function(err, team) {
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
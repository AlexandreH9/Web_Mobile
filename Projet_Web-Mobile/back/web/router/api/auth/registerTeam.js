/**
 * Created by user on 28/03/2017.
 */
var router = require('express').Router();
var Team = require('../../../../models/Team');
var hash = require('../../../../helpers/hash');

router.get('/', function(req, res) {
    Team.find({}).then(function(teams) {
        res.json(teams);
    });
});

router.post('/', function(req, res) {
    var teamname = req.body.teamname;
    var email = req.body.email;
    var password = req.body.password;

    var newTeam = new Team({
        teamname: teamname,
        email: email,
        password: hash.hashPassword(password)
    }).save().then(function(teamSaved) {
        res.json(teamSaved);
    });
});

module.exports = router;

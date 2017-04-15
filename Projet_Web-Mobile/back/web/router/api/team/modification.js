/**
 * Created by Alexandre on 15/04/2017.
 */
var router = require('express').Router();
var Team = require('../../../../models/Team.js');
var hash = require('../../../../helpers/hash');

router.post("/teamname", function(req, res) {
    User.findOne({teamname: req.user.teamname}, function(err, team) {
        if (!user) {
            res.status(401).json({message: ''});
        }
        else {
            if(req.body.newTeamname == null) {
                res.status(401).json({message: 'Entrez un teamname'});
            }
            else {
                team.teamname = req.body.newTeamname;
                team.save();
            }

        }
    });
});


router.post("/email", function(req, res) {
    Team.findOne({email: req.user.email}, function(err, team) {
        if (!team) {
            res.status(401).json({message: ''});
        }
        else {
            if(req.body.newEmail == null) {
                res.status(401).json({message: 'Entrez un email'});
            }
            else {
                team.email = req.body.newEmail;
                team.save();
            }
        }
    });
});


router.post("/password", function(req, res) {
    Team.findOne({password: req.team.password}, function(err, team) {
        if (!team) {
            res.status(401).json({message: ''});
        }
        else {
            if(req.body.newPassword == null) {
                res.status(401).json({message: 'Entrez un password'});
            }
            else {
                team.password = hash.hashPassword(req.body.newPassword);
                team.save();
            }
        }
    });
});

module.exports = router;
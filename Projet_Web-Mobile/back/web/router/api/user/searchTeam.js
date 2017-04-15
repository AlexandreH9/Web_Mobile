/**
 * Created by Alexandre on 15/04/2017.
 */
var router = require('express').Router();
var Team = require('../../../../models/Team.js');

router.post("/", function(req, res) {
    Team.findOne({teamname: req.body.teamname}, function(err, team) {
        if (!team) {
            res.status(401).json({message: 'Bad teamname'});
        }
        else {
            res.json(team);
        }
    });
});

module.exports = router;
/**
 * Created by pierr on 05/04/2017.
 */

var router = require('express').Router();
var User = require('../../../../models/User.js');

router.post("/", function(req, res) {
    User.findOne({username: req.body.username}, function(err, user) {
            if (!user) {
                res.status(401).json({message: 'Bad username'});
            }
            else {
                res.json(user);
            }
        });
    });

module.exports = router;
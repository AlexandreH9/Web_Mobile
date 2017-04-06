/**
 * Created by pierr on 05/04/2017.
 */

var router = require('express').Router();
var User = require('../../../../models/User.js');

router.get('/', function(req, res) {
    User.find({}).then(function(users) {
        res.json(users);
    });
});

module.exports = router;
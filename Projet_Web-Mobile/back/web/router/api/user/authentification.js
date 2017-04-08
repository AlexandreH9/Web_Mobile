/**
 * Created by pierr on 06/04/2017.
 */

var router = require('express').Router();
var User = require('../../../../models/User');
var hash = require('../../../../helpers/hash');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
require('../../../../config/index');

router.use(cookieParser());
router.use(bodyParser.json());

router.get('/', function(req, res) {
    res.send("Authentificate");
});

router.post('/', function (req,res) {
    User.findOne({
        username: req.body.username
    }, function(err, user) {

        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {
            var password = hash.hashPassword(req.body.password);

            if (user.password != password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {
                var payload = { id: user.id };
                var token = jwt.sign(payload, process.env.SECRET);

                res.json({
                    success: true,
                    message: 'token',
                    token: 'JWT ' + token
                });

            }

        }

    });
});

module.exports = router;
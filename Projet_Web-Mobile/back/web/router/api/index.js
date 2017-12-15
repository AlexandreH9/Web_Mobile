var router = require('express').Router();
var passport = require('passport');
var passportJWT = require("passport-jwt");
//liste des routes de l'api
router.use('/user', require('./user')); // Vérif du token
router.use('/team',passport.authenticate('jwt', { session: false}), require('./team')); // Vérif du token
router.use('/auth', require('./auth'));
router.use('/api_ext', passport.authenticate('jwt', { session: false}), require('./api_ext'));

module.exports = router;

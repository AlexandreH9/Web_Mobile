var router = require('express').Router();
var passport = require('passport');
var passportJWT = require("passport-jwt");
//liste des routes de l'api
router.use('/user', require('./user')); //passport.authenticate('jwt', { session: false}, Vérif du token
router.use('/team', require('./team')); //passport.authenticate('jwt', { session: false}, Vérif du token
router.use('/auth', require('./auth'));
router.use('/api_ext', require('./api_ext'));

module.exports = router;

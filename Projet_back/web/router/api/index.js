var router = require('express').Router();
//liste des routes de l'api
router.use('/user', require('./user'));
router.use('/team', require('./team'));
router.use('/auth', require('./auth'));
router.use('/api_ext', require('./api_ext'));

module.exports = router;

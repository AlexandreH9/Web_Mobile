var router = require('express').Router();
//liste des routes de l'api
router.use('/user', require('./user'));
router.use('/team', require('./team'));

module.exports = router;

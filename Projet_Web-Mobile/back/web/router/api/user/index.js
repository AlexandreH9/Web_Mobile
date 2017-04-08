var router = require('express').Router();

router.use('/register', require('./register.js'));
// router.use('/authentification', require('./authentification.js'));

module.exports = router;

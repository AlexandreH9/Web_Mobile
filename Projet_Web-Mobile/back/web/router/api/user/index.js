var router = require('express').Router();

router.use('/register', require('./register.js'));
// router.use('/authentification', require('./authentification.js'));
router.use('/search', require('./searchTeam.js'));
router.use('/change', require('./modification.js'));
router.use('/login', require('./authenticate'));

module.exports = router;

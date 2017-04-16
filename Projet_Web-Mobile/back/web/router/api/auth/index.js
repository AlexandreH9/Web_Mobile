/**
 * Created by user on 31/03/2017.
 */
var router = require('express').Router();

router.use('/authUser', require('./authUser.js'));
router.use('/authTeam', require('./authTeam.js'));
router.use('/registerUser', require('./registerUser.js'));
router.use('/registerTeam', require('./registerTeam.js'));

module.exports = router;
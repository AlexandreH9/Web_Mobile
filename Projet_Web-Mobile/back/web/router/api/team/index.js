/**
 * Created by user on 28/03/2017.
 */
var router = require('express').Router();

router.use('/register', require('./register.js'));
router.use('/search', require('./searchUser.js'));

module.exports = router;
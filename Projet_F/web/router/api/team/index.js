/**
 * Created by user on 28/03/2017.
 */
var router = require('express').Router();

router.use('/register', require('./register.js'));

module.exports = router;
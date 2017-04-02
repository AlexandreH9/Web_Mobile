var router = require('express').Router();

router.use('/register', require('./register.js'));

module.exports = router;

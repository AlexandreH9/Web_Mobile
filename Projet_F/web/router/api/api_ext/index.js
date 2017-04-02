/**
 * Created by user on 02/04/2017.
 */
var router = require('express').Router();

router.use('/steam', require('./steam'));

module.exports = router;
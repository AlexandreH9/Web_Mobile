/**
 * Created by user on 31/03/2017.
 */
var router = require('express').Router();

router.use('/authcontroller', require('./authcontroller.js'));

module.exports = router;
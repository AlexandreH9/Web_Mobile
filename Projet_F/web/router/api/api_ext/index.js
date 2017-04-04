/**
 * Created by pierr on 04/04/2017.
 */
var router = require('express').Router();
//liste des routes de l'api_externe
router.use('/steam', require('./steam'));

module.exports = router;


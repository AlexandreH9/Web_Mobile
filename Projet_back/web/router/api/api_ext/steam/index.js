/**
 * Created by pierr on 04/04/2017.
 */
var router = require('express').Router();

router.use('/account', require('./getAccount.js'));
router.use('/games', require('./getGames.js'));
router.use('/stats', require('./getStats.js'));

module.exports = router;

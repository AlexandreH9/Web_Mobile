var router = require('express').Router();

router.use("/api", require('./api'));
router.use("/", require('./front'));

module.exports = router;

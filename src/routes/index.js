const express = require('express');
const scraper = require('./scraper');
//const user = require('./user');

const router = express.Router();

router.use('/scrape-query/', scraper);
//router.use('/user/', user);

module.exports = router;
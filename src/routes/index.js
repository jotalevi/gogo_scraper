const express = require('express');
const scraper = require('./scraper');
const config = require('../config')
//const user = require('./user');

const router = express.Router();

router.use(`${config.proxy_path}/scrape-query/`, scraper);
//router.use('/user/', user);

module.exports = router;
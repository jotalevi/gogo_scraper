const express = require('express');
const router = express.Router({ mergeParams: true });
const scraperController = require('../../controllers/scraper');

router.route('/popular/:page_no')
    .get(scraperController.popular);

router.route('/anime/:anime_id')
    .get(scraperController.anime);

router.route('/episode/:episode_id')
    .get(scraperController.episode);

router.route('/search/:query')
    .get(scraperController.search);

module.exports = router;
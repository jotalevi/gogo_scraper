
const express = require('express');
const router = express.Router({ mergeParams: true });
const userController = require('../../controllers/user/');

router.route('/login/')
    .post(userController.login);

router.route('/data/')
    .get(userController.data);

router.route('/append-watch/')
    .post(userController.appendWatch)

module.exports = router;
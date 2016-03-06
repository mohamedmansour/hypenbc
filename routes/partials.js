var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/video-list.html', function(req, res, next) {
    res.render('video-list');
});

/* GET users listing. */
router.get('/video.html', function(req, res, next) {
    res.render('video');
});

module.exports = router;

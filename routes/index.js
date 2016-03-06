var express = require('express');
var router = express.Router();


module.exports = function(models) { 

    /* GET home page. */
    router.get('/', function(req, res, next) {
        res.render('index');
    });

    router.get('/memes/:id', function(req, res, next) {
        if (process.env.NODE_ENV == 'dev') {
             res.render('memepage', {"_id":"56dc3cd6a6dcec520fd5e564","UserId":"1","VideoTitle":"warcraft","MemeUrl":"/api/image/meme__created_1457274070338__vid_warcraft.png","__v":0});
            return;
        }
        models.Memes.findOne({_id: req.params.id}, function(err, meme){
            res.render('memepage', meme);
        });
    });

    return router;
};

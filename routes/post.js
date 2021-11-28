var express = require('express');
var router = express.Router();

router.post('/add', function(req, res, next) {
    let posts = req.app.locals.posts;
    console.log(req.body);
    posts.unshift({name:req.body.name, text:req.body.text });
    
    res.redirect('/');
});

module.exports = router;

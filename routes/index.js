var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const posts = req.app.locals.posts;
  res.render('index', { title: 'Express' , posts: posts });
});

module.exports = router;

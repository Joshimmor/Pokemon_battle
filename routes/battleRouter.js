var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.cookies.starter_pokemon) res.redirect('/starter')
  res.render('battle', { title: 'Express' });
});

module.exports = router;

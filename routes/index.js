var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(n => {
    res.render('index', { PikaChu: n.data.sprites.front_shiny });
  }).catch(err => res.send('Not Found'))
 
});

module.exports = router;
